import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService],
})
export class RegisterComponent implements OnInit {


  existeElUser!:boolean;
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  });

  constructor(private authSvc:AuthService,private ruta:Router) { }

  ngOnInit(): void {
  }


  async onRegister(){
    const {email,password} = this.registerForm.value;
    const user = await this.authSvc.register(email,password)
    if (user){
      //redireccionar
      this.ruta.navigate(['/bienvenido']);
    }else{
      this.showModal();
    }
    
  }

   CloseModal() {
  var element:any = document.getElementById('mymodal');  
  element.style.display = "none";
  var atras:any = document.getElementById('contenedor-central');
  atras.style.pointerEvents= "auto";
  document.getElementById('contenedor-central');
  this.registerForm.reset();
}


 showModal() {
  var element:any = document.getElementById('mymodal');  
  var atras:any = document.getElementById('contenedor-central');
  atras.style.pointerEvents= "none";
  element.style.display = "block";
  
   
}

goLogin(){
  this.ruta.navigate(['/login']);
}


}
