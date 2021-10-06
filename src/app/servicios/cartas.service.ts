import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  constructor(private http:HttpClient) { }
  
  deckID!:string;
  mazo!:CartasService;
  miMazo!:string

  
  public mezclar(){
    return this.http.get("http://deckofcardsapi.com/api/deck/m31yst1o69hp/shuffle/");
  }

  

  public obtenerCartas(){
    
    return this.http.get("http://deckofcardsapi.com/api/deck/m31yst1o69hp/draw/?count=52");
    
  }
}


