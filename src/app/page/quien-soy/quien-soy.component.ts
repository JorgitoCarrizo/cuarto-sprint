import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css'],
  providers:[AuthService]
})
export class QuienSoyComponent implements OnInit {


  
  constructor(private rutas:Router,private authSrv: AuthService) { }

  ngOnInit():void { 
    
  }

  
}
