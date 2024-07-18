import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsaleService {

  constructor(private http: HttpClient) { }

  // Define your methods here, e.g.:
  getSalesData(): Observable<any> {
    return this.http.get('/api/sales');
  }
}
