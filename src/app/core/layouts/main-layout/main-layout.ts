import { Component } from '@angular/core';

import { Footer, Header } from '@/core/components';

@Component({
  selector: 'app-main-layout',
  imports: [Header, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
