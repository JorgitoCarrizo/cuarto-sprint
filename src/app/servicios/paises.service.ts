import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }



  public obtenerPaises(){
    return this.http.get("https://countriesnow.space/api/v0.1/countries/capital");
  }

  
}

