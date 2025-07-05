import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { map, shareReplay } from 'rxjs';

import { HighlightService } from '@/core/services/highlight-service';
import { SeoService } from '@/core/services/seo-service';
import { HybridCard } from './components/hybrid-card/hybrid-card';

@Component({
  selector: 'app-highlight',
  imports: [MatIconModule, MatButtonModule, HybridCard],
  templateUrl: './highlight.html',
  styleUrl: './highlight.scss',
})
export class Highlight {
  private readonly highlightService = inject(HighlightService);
  private readonly seoService = inject(SeoService);

  highlight$ = this.highlightService.getHighlight().pipe(shareReplay(1));
  blogs = toSignal(this.highlight$.pipe(map((h) => h.blogs)), {
    initialValue: [],
  });
  notices = toSignal(this.highlight$.pipe(map((h) => h.notices.slice(0, 3))), {
    initialValue: [],
  });
  mainNotice = computed(() => {
    const notices = this.notices();
    return notices.find((n) => n.isMain) || null;
  });

  constructor() {
    this.seoService.applyHighlightSEO();
  }
}
