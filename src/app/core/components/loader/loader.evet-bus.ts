import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderEventBus {
  private loaderSubject = new BehaviorSubject(false);
  loaderState$ = this.loaderSubject.asObservable();

  toggleLoader(show: boolean) {
    this.loaderSubject.next(show);
  }
}
