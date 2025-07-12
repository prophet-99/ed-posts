import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderEventBus } from './loader.evet-bus';

@Component({
  selector: 'app-loader',
  imports: [MatProgressSpinnerModule, AsyncPipe],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader {
  readonly loaderEventBus = inject(LoaderEventBus);
}
