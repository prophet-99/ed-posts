import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { type Highlight } from '@/core/models';
import { environment } from '@/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
  private httpClient = inject(HttpClient);
  private baseUrl = `${environment.baseURL}/highlight`;

  getHighlight(): Observable<Highlight> {
    console.log('Fetching highlight data from:', `${this.baseUrl}/highlight`);
    return this.httpClient.get<Highlight>(this.baseUrl);
  }
}
