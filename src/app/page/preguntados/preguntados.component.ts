import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css'],
  providers:[AuthService]
})
export class PreguntadosComponent implements OnInit {


  preguntasTotales=1;
  correctas=0;

  serviciosPaises:any;
  misPaises!: any;
  pais: any;
  aux:any;
  respuestas:any= [];
  numeroPais!:number;
  respuesta1!:any;
  respuesta2!:any;
  respuesta3!:any;
  respuesta4!:any;
  cantidadPaises!:number;

 
  constructor(private rutas:Router,private authSrv: AuthService, private paises:PaisesService) { 
    this.serviciosPaises = paises;
    this.generar();
  }

  ngOnInit():void { 
    
  }


  actionMethod($event: MouseEvent) {
    var atras:any = document.getElementById('contenedor-principal');
    atras.style.pointerEvents= "none";
    if (($event.target as HTMLButtonElement).textContent == this.misPaises["data"][this.numeroPais]["capital"])
    {
      ($event.target as HTMLButtonElement).style.backgroundColor = "green";
      ($event.target as HTMLButtonElement).style.color = "white";
      this.correctas = this.correctas +1;
    }
    else{
      
      ($event.target as HTMLButtonElement).style.backgroundColor = "red";
      ($event.target as HTMLButtonElement).style.color = "white";
      console.log(this.numeroPais)
          for (let i = 0; i < 4; i++) {
          if (this.respuestas[i].capital == this.misPaises["data"][this.numeroPais]["capital"])
          {
            var elemento:any = document.getElementById(i.toString());
            elemento.style.backgroundColor= "blue";
            elemento.style.color= "white";
            
          }
          
        
      };
      
      
      
    }
    
    ($event.target as HTMLButtonElement).disabled = true;
    // Do actions.
    
    
   setTimeout(() => {
    ($event.target as HTMLButtonElement).disabled = false;
     
     
     if (this.preguntasTotales == 10){
      this.restartJuego();
    }
    else{
      this.restartBotones();
      this.preguntasTotales = this.preguntasTotales +1;
      this.generar();
    }
    
   }, 2000);
   

}

  async generar(){
  
  await this.serviciosPaises.obtenerPaises().subscribe((aux: any)=>{
    
    this.respuestas = [];
    
    this.misPaises = aux;
    this.cantidadPaises = this.misPaises["data"].length-1;
    this.numeroPais = Math.floor(Math.random() * this.cantidadPaises);
    this.pais = this.misPaises["data"][this.numeroPais]["name"];
    
    let proximoPais
    this.respuestas.push(this.misPaises["data"][this.numeroPais]);
    for (let i = 0; i < 3; i++) {
      proximoPais = this.misPaises["data"][Math.floor(Math.random() * this.cantidadPaises)];
      if (proximoPais.capital !== "" || proximoPais.name !== ""){
        this.respuestas.push(proximoPais);
      }
      
    }
    if (this.respuestas.length < 4){
      proximoPais = this.misPaises["data"][Math.floor(Math.random() * this.cantidadPaises)];
      if (proximoPais.capital !== "" || proximoPais.name !== ""){
        this.respuestas.push(proximoPais);
      }
    }
    console.log(this.respuestas)
    
    this.respuestas.sort(function() {return Math.random() - 0.5});
    
    
    this.respuesta1 = this.respuestas[0].capital;
    this.respuesta2 = this.respuestas[1].capital;
    this.respuesta3 = this.respuestas[2].capital;
    this.respuesta4 = this.respuestas[3].capital;
  })
}
restartBotones(){
  for (let i = 0; i < 4; i++) {
      var atras:any = document.getElementById('contenedor-principal');
      atras.style.pointerEvents= "auto";
      var elemento:any = document.getElementById(i.toString());
      elemento.style.backgroundColor= "antiquewhite";
      elemento.style.color= "black";
      
    
      }
    }

restartJuego(){
  if (this.correctas == 10){
    this.showWinner();
  }
  else if (this.correctas > 6){
    this.showModal();
  }
  
  else{
    this.showLooser();
  }

  
  
}

CloseModal() {
  var element:any = document.getElementById('mymodal');  
  element.style.display = "none";
  var atras:any = document.getElementById('contenedor-principal');
  atras.style.pointerEvents= "auto";
  this.preguntasTotales = 1;
  this.correctas=0;
  this.generar();
  this.restartBotones();
}
 showModal() {
  var element:any = document.getElementById('mymodal');  
  var atras:any = document.getElementById('contenedor-principal');
  atras.style.pointerEvents= "none";
  element.style.display = "block";
   
}

CloseWinner() {
  var element:any = document.getElementById('winner');  
  element.style.display = "none";
  var atras:any = document.getElementById('contenedor-principal');
  atras.style.pointerEvents= "auto";
  this.preguntasTotales = 1;
  this.correctas=0;
  this.generar();
  this.restartBotones();
}
 showWinner() {
  var element:any = document.getElementById('winner');  
  var atras:any = document.getElementById('contenedor-principal');
  atras.style.pointerEvents= "none";
  element.style.display = "block";
   
}

CloseLooser() {
  var element:any = document.getElementById('looser');  
  element.style.display = "none";
  var atras:any = document.getElementById('contenedor-principal');
  atras.style.pointerEvents= "auto";
  this.preguntasTotales = 1;
  this.correctas=0;
  this.generar();
  this.restartBotones();
}

showLooser() {
  var element:any = document.getElementById('looser');  
  var atras:any = document.getElementById('contenedor-principal');
  atras.style.pointerEvents= "none";
  element.style.display = "block";
   
}

irInicio(){
  this.rutas.navigate(['/bienvenido']);
}

}
