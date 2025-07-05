import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { EdLogoGraphic } from '@/shared/graphics';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatToolbarModule,
    EdLogoGraphic,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
