import { Injectable } from '@angular/core';
// @ts-ignore
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  url;
  jsonData;
  constructor(private http: HttpClient) {
  }

  getData(): Observable<any[]> {
    this.url = '../assets/basicInfo.json';
    this.jsonData = this.http.get(this.url);
    return this.jsonData;
  }

  getExtebdedData(): Observable<any[]> {
    this.url = '../assets/moreInfo.json';
    this.jsonData = this.http.get(this.url);
    return this.jsonData;
  }
}

