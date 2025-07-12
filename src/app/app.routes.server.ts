import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { BlogService } from './core/services';
import { firstValueFrom } from 'rxjs';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender, // SSG
  },
  {
    path: 'actualidad',
    renderMode: RenderMode.Server, // SSR
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender, // SSG
    async getPrerenderParams() {
      const blogsService = inject(BlogService);
      const ids = await firstValueFrom(blogsService.getPostIds());

      return ids.map((slug) => ({ slug }));
    },
  },
];
