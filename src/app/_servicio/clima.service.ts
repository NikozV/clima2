import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  
  key = 'aa1756cfebf4cd0a29d5c4478493402e';
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  constructor(private http: HttpClient) { }

  clima(ciudad: string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&mode=json&units=metric&appid=${this.key}`);
  }
}
