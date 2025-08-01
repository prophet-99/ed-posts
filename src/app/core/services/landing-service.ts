import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { type LandingOffer } from '@/core/models';
import { environment } from '@/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LandingService {
  private httpClient = inject(HttpClient);
  private baseUrl = `${environment.baseURL}/services`;

  getOfferServices(): Observable<LandingOffer[]> {
    return this.httpClient.get<LandingOffer[]>(this.baseUrl);
  }
}
