import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { LandingService } from '@/core/services';
import { ServiceCard } from './components/service-card/service-card';
import { SeoService } from '@/core/services/seo-service';

@Component({
  selector: 'app-home',
  imports: [ServiceCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly landingService = inject(LandingService);
  private readonly seoService = inject(SeoService);

  offerServices = toSignal(this.landingService.getOfferServices());

  constructor() {
    this.seoService.applyHomeSEO();
  }
}
