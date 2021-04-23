import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  date!: Observable<Date>;
  constructor() { }
  getClock(): Observable<Date> {
    return interval(1000).pipe(mergeMap(_ => of(new Date())));
  }
}
