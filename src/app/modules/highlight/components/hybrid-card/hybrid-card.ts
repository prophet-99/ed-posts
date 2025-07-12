import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { type HighlightBlog, type HighlightNotice } from '@/core/models';

@Component({
  selector: 'app-hybrid-card',
  imports: [RouterLink, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './hybrid-card.html',
  styleUrl: './hybrid-card.scss',
})
export class HybridCard {
  type = input<'horizontal' | 'vertical'>('horizontal');
  post = input<HighlightBlog | HighlightNotice>();
}
