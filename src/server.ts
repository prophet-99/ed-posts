import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

//* 👀 Descomment in development
// import { getBlogById, getBlogIds, getHighlight, getServices } from './api';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

//* 👀 Descomment in development
// Example requests for API REST
// app.get('/api/services', getServices);
// app.get('/api/highlight', getHighlight);
// app.get('/api/blog/ids', getBlogIds);
// app.get('/api/blog/:id', getBlogById);

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

/**
 * 🧱 Prerendered HTML files are served from the browserDistFolder
 */
app.use((req, res, next) => {
  const htmlPath = join(browserDistFolder, req.url, 'index.html');
  if (existsSync(htmlPath)) {
    console.log(`🧱 Serving prerendered HTML for ${req.url}`);
    return res.sendFile(htmlPath);
  }
  next();
});

/**
 * ⚡ Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  console.log(`⚡ Rendering SSR HTML  for ${req.url}`);
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next()
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
