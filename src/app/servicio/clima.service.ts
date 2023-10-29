import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key = "11d1c7aa33dec2d2b63367acf14406e1";

  constructor(private http: HttpClient) { }

  clima(ciudad:string): Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&mode=json&units=metric&appid=${this.key}`)
  }

}
