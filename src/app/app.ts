import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainLayout } from './core/layouts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'ed-posts';
}
