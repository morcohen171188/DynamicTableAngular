import { Injectable } from '@angular/core';
// @ts-ignore
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { CHARACTERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getCharacters(): Observable<any[]> {
    return Observable.of(CHARACTERS).delay(100);
  }
  getColumns(): string[] {
    return ['name', 'age', 'species', 'occupation']; }
}

