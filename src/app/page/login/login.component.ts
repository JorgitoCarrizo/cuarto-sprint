import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService],
})
export class LoginComponent implements OnInit {

  emailDefecto : string = '';
  passwordDefecto: string = '';

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  async ngOnInit() {
    const user= await this.authSrv.getCurrentUser();
    if (user){
      this.rutas.navigate(['/bienvenido']);
    }
    
  }


  constructor(private rutas:Router,private authSrv:AuthService) {

   }

   cargarUser(){
     this.emailDefecto= 'jorge@gmail.com';
     this.passwordDefecto = 'password';
     this.loginForm.value('jorge@gmail.com','password');
   }

  
 async onLogin(){
   const {email,password} = this.loginForm.value;
   
   const user = await this.authSrv.login(email,password);
   if(user){
     //redirecciona a la homepage
     this.rutas.navigate(['/bienvenido']);
   }
 }


}
