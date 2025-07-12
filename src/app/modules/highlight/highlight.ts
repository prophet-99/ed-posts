import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { map, shareReplay } from 'rxjs';

import { Loader } from '@/core/components';
import { HighlightService, SeoService } from '@/core/services';
import { HybridCard } from './components/hybrid-card/hybrid-card';
import { LoaderEventBus } from '@/core/components/loader/loader.evet-bus';

@Component({
  selector: 'app-highlight',
  imports: [MatIconModule, MatButtonModule, HybridCard, Loader],
  templateUrl: './highlight.html',
  styleUrl: './highlight.scss',
})
export class Highlight {
  private readonly highlightService = inject(HighlightService);
  private readonly seoService = inject(SeoService);
  private loaderEventBus = inject(LoaderEventBus);

  highlight$ = this.highlightService.getHighlight().pipe(shareReplay(1));
  blogs = toSignal(this.highlight$.pipe(map((h) => h.blogs)), {
    initialValue: [],
  });
  notices = toSignal(this.highlight$.pipe(map((h) => h.notices.slice(0, 3))), {
    initialValue: [],
  });
  mainNotice = computed(() => {
    const notices = this.notices();
    if (notices.length > 0) this.loaderEventBus.toggleLoader(false);
    return notices.find((n) => n.isMain) || null;
  });

  constructor() {
    this.loaderEventBus.toggleLoader(true);
    this.seoService.applyHighlightSEO();
  }
}
