import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquiposFutbolService {

  constructor(private http:HttpClient) { }


  public equiposArgentina(){
 

    
    return this.http.get("https://apiv3.apifootball.com/?action=get_teams&league_id=44&APIkey=81aa43adf79632982dce61b7a2ce90867247151d6b8713b335d8d66efd54de28");
    
    
    
      }
      
  public equiposItalia(){
 
    return this.http.get("https://apiv3.apifootball.com/?action=get_teams&league_id=207&APIkey=81aa43adf79632982dce61b7a2ce90867247151d6b8713b335d8d66efd54de28");
    }
      
  public equiposEspana(){
 

    return this.http.get("https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=81aa43adf79632982dce61b7a2ce90867247151d6b8713b335d8d66efd54de28");
    
    
      }

}
