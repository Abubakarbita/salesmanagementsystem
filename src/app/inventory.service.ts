import { Injectable } from '@angular/core';
import { Inventory } from './inventory';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private baseURL = 'http://localhost:8080/api/v1/inventory';

  constructor(private httpClient: HttpClient) {}

  addItem(inventory: Inventory): Observable<Inventory> {
    return this.httpClient.post<Inventory>(`${this.baseURL}`, inventory);
  }
}
