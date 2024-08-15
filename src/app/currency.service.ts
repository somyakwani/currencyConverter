import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiKey = 'fca_live_ZSZ7liZC5kbW7LLD9os8xywtgEYbtITSUxHiL8ry';
  private apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
