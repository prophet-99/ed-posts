import { Component, input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { type LandingOffer } from '@/core/models';

@Component({
  selector: 'app-service-card',
  imports: [MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  offerService = input.required<LandingOffer>();
}
