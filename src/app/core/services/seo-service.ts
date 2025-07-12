import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly titlePlatform = inject(Title);
  private readonly metaPlatform = inject(Meta);

  applyHomeSEO() {
    this.titlePlatform.setTitle('Inicio | ED Posts - Tecnología y SSR');
    this.metaPlatform.updateTag({
      name: 'description',
      content:
        'Bienvenido a ED Posts, tu plataforma para descubrir lo último en tecnología, desarrollo frontend y renderizado del lado del servidor (SSR). Explora servicios, tendencias y recursos para potenciar tus proyectos.',
    });
    this.metaPlatform.updateTag({
      name: 'keywords',
      content:
        'SSR, Angular, Next.js, Frontend, Servicios, Tecnología, Renderizado en servidor, Desarrollo web, ED Posts',
    });
  }

  applyHighlightSEO() {
    this.titlePlatform.setTitle(
      'Destacados SSR, Angular y Frontend | ED Posts - Tecnología y SSR'
    );
    this.metaPlatform.updateTag({
      name: 'description',
      content:
        'Noticias y blogs destacados sobre Server-Side Rendering (SSR), Angular, Next.js y tendencias del mundo frontend. Descubre novedades, comparativas y mejores prácticas.',
    });
    this.metaPlatform.updateTag({
      name: 'keywords',
      content:
        'SSR, Angular, Next.js, Frontend, Noticias, Blogs, JavaScript, Renderizado en servidor, SEO, Tendencias',
    });
  }

  applyBlogDetailSEO(title: string, description: string, image?: string) {
    this.titlePlatform.setTitle(
      `${title} | ED Posts - Blog de Tecnología y SSR`
    );
    this.metaPlatform.updateTag({
      name: 'description',
      content: description,
    });
    this.metaPlatform.updateTag({
      name: 'keywords',
      content: `${title}, SSR, Angular, Next.js, Frontend, Blog, Tecnología, Renderizado en servidor, ED Posts`,
    });
    // Open Graph para Facebook
    this.metaPlatform.updateTag({ property: 'og:title', content: title });
    this.metaPlatform.updateTag({
      property: 'og:description',
      content: description,
    });
    if (image) {
      this.metaPlatform.updateTag({ property: 'og:image', content: image });
      this.metaPlatform.updateTag({ name: 'twitter:image', content: image });
    }
    this.metaPlatform.updateTag({ property: 'og:type', content: 'article' });
    this.metaPlatform.updateTag({
      property: 'og:site_name',
      content: 'ED Posts',
    });
    // Twitter Card
    this.metaPlatform.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.metaPlatform.updateTag({ name: 'twitter:title', content: title });
    this.metaPlatform.updateTag({
      name: 'twitter:description',
      content: description,
    });
    this.metaPlatform.updateTag({ name: 'twitter:site', content: '@edposts' });
  }
}
