import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsaleService {
  private apiUrl = 'http://localhost:8080/api/vi';

  constructor(private http: HttpClient) { }

  // saveSale(newSale: Newsale): Observable<Newsale> {

  saveSale(newSaleService: NewsaleService): Observable<NewsaleService> {
    return this.http.post<NewsaleService>(`${this.apiUrl}/saveSale`, newSaleService);
  }


 getSale(id: number): Observable<NewsaleService> {
  return this.http.get<NewsaleService>(`${this.apiUrl}/newsale/${id}`);
    
  }

  getAllSales(): Observable<NewsaleService[]> {
    return this.http.get<NewsaleService[]>(`${this.apiUrl}/newsale`);
  }
}
