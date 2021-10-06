import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { getConstantValue, ModifierFlags } from 'typescript';
import * as $ from "jquery";
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


import * as bootstrap from "bootstrap";



@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css'],
  providers:[AuthService]
})
export class AhorcadoComponent implements OnInit {


  
  numeroAciertos=0;
  numeroErrores=0;
  palabras = ['gato','arbol','libro','televisor','pileta','zorro'];
  palabraRandom = this.palabras[Math.floor(Math.random() * this.palabras.length)];
  letra:string = '';
  palabraX:string='';

  
  constructor(private rutas:Router,private authSrv: AuthService) { 
    
  }

  ngOnInit(): void {
    this.nuevaPalabra();
  }
  
  actionMethod($event: MouseEvent) {
    ($event.target as HTMLButtonElement).disabled = true;
    // Do actions.

    let elemento = ($event.target as HTMLButtonElement).id;
    this.letra=elemento;
    
    console.log(this.letra);

}

nuevaPalabra(){
  
  for (let index = 0; index < this.palabraRandom.length; index++) {
    this.palabraX = this.palabraX + '-';
    
  }
  console.log(this.palabraX);
}

procesa(){ 

 
  if (this.palabraRandom.includes(this.letra.toLowerCase()))
  {
    console.log("aparece");
    for (let i = 0; i < this.palabraRandom.length; i++) {
      if(this.palabraRandom.charAt(i) == this.letra.toLowerCase()){
        this.palabraX = this.palabraX.substr(0,i) + this.letra + this.palabraX.substr(i + 1);
        this.numeroAciertos = this.numeroAciertos +1;
        if ( this.numeroAciertos == this.palabraRandom.length)
        {
          setTimeout(() => {
            this.showModal();
          
          this.restart();
          }, 1000);
          
        }
      }
      
    }
  }
  else{
    this.numeroErrores = this.numeroErrores + 1;
    if(this.numeroErrores == 6)
    {
      setTimeout(() => {
      this.showModalPerdiste();
      this.restart();
      }, 1000);
      
    }
  }
  
}
restartBoton(){
  
  $('#botonera *').prop('disabled', false);
  
}

restart(){
  this.numeroAciertos=0;
  
  this.palabraRandom = this.palabras[Math.floor(Math.random() * this.palabras.length)];
  this.letra = '';
  this.palabraX='';
  this.nuevaPalabra();
  this.restartBoton();
}

 CloseModal() {
  var element:any = document.getElementById('mymodal');  
  element.style.display = "none";
  var atras:any = document.getElementById('contenedor-central');
  atras.style.pointerEvents= "auto";
  this.numeroErrores=0;
  
}


 showModal() {
  var element:any = document.getElementById('mymodal');  
  var atras:any = document.getElementById('contenedor-central');
  atras.style.pointerEvents= "none";
  element.style.display = "block";
   
}

CloseModalPerdiste(){
  var element:any = document.getElementById('mymodalPerdiste');  
  element.style.display = "none";
  var atras:any = document.getElementById('contenedor-central');
  atras.style.pointerEvents= "auto";
  this.numeroErrores=0;
}

showModalPerdiste(){
  var element:any = document.getElementById('mymodalPerdiste');  
  var atras:any = document.getElementById('contenedor-central');
  atras.style.pointerEvents= "none";
  element.style.display = "block";
}

irInicio(){
  this.rutas.navigate(['/bienvenido']);
}

}




