import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css'],
  providers: [AuthService],
})
export class BienvenidoComponent implements OnInit {

  
  public user$ :Observable<any> = this.authSrv.afAuth.user;
  

  constructor(private rutas:Router,private authSrv: AuthService) { }

  ngOnInit():void { 
    
  }

  ahorcado(){
    this.rutas.navigate(['/ahorcado']);
  }

  mayorMenor(){
    this.rutas.navigate(['/mayorMenor']);
  }
  
  
}
