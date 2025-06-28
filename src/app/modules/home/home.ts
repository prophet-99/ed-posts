import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { LandingService } from '@/core/services';
import { ServiceCard } from './components/service-card/service-card';

@Component({
  selector: 'app-home',
  imports: [ServiceCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private landingService = inject(LandingService);
  offerServices = toSignal(this.landingService.getOfferServices());
}
