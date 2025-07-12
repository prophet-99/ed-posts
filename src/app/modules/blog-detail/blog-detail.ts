import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { BlogService, SeoService } from '@/core/services';
import { BlogPost } from '@/core/models';
import { Loader } from '@/core/components';
import { LoaderEventBus } from '@/core/components/loader/loader.evet-bus';

@Component({
  selector: 'app-blog-detail',
  imports: [RouterLink, MatIconModule, Loader],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss',
})
export class BlogDetail {
  private activatedRoute = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private seoService = inject(SeoService);
  private loaderEventBus = inject(LoaderEventBus);

  private blogId = this.activatedRoute.snapshot.params['slug'];
  blog = toSignal(this.blogService.getPostBySlug(this.blogId));

  constructor() {
    this.loaderEventBus.toggleLoader(true);
    effect(() => {
      const blog = this.blog();
      if (blog) {
        this.applySEO(blog);
        this.loaderEventBus.toggleLoader(false);
      }
    });
  }

  private applySEO(blog: BlogPost) {
    const firtParagraph =
      blog.content
        .find((block) => block.type === 'paragraph')
        ?.text.split('.')[0] || 'Blog post about technology and SSR';

    this.seoService.applyBlogDetailSEO(blog.title, firtParagraph);
  }
}
