import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { HttpClient } from '@angular/common/http';
import { CartasService } from 'src/app/servicios/cartas.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css'],
  providers:[AuthService]
})
export class MayorMenorComponent implements OnInit {

  show='block';
  carta1:any;
  ganados:number=0;
  perdidos:number=0;
  estadoJuego="EMPECEMOS!!!";

  valor1!:number;
  valor2!:number;
  misCartas:any;
  constructor(
    private rutas:Router,
    private authSrv: AuthService,
    private cartasArray: CartasService
    

    ) {
      let primerCarta :any = Math.floor(Math.random() * 52);
      this.cartasArray.mezclar().subscribe();
      this.cartasArray.obtenerCartas().subscribe((cartas:any)=>{
        this.misCartas = cartas;
        this.carta1 = cartas["cards"][primerCarta]["image"];
        let aux = cartas["cards"][primerCarta]["value"];
        if (!isNaN(aux)){
          this.valor1 = Number(aux);
        }else
        {
          switch (aux){
            case 'ACE':
              this.valor1 = 1;
              break;
            case 'JACK':
              this.valor1 = 11;
              break;
            case 'QUEEN':
              this.valor1 = 12;
              break;
            case 'KING':
              this.valor1 = 13;
              break;
            default:
              console.log("error");

          }
        }
        
        
        console.log(cartas);
        
      },error => {console.log(error)})
     }

  ngOnInit(): void {
  }

  
 CloseModal() {
  var element:any = document.getElementById('mymodal');  
  element.style.display = "none";
  var atras:any = document.getElementById('contenedor-central');
  // atras.style.pointerEvents= "auto";
}
 showModal() {
  var element:any = document.getElementById('mymodal');  
  var atras:any = document.getElementById('contenedor-central');

  // atras.style.pointerEvents= "none";
  element.style.display = "block";
  
}
irInicio(){
  this.rutas.navigate(['/bienvenido']);
}

getCartas(){

  
  
  let siguiente:any = Math.floor(Math.random() * 52);
  this.carta1 = this.misCartas["cards"][siguiente]["image"];

  let aux = this.misCartas["cards"][siguiente]["value"];
        if (!isNaN(aux)){
          this.valor2 =Number(aux);
          console.log("numero");
        }else
        {
          switch (aux){
            case 'ACE':
              this.valor2 = 1;
              break;
            case 'JACK':
              this.valor2 = 11;
              break;
            case 'QUEEN':
              this.valor2 = 12;
              break;
            case 'KING':
              this.valor2 = 13;
              break;
            default:
              console.log("error");

          }
        }
        console.log(this.valor2);

}

esMayor(){
  if (+this.valor1 <= +this.valor2)
  {
    this.ganados = this.ganados +1;
    this.estadoJuego = "GANASTE!!!";
  }
  else{
    this.perdidos = this.perdidos +1;
    this.estadoJuego = "PERDISTE!!!";
  }
  this.valor1 = this.valor2;
  
}

esMenor(){
  if (+this.valor1 >= +this.valor2)
  {
    this.ganados = this.ganados +1;
    this.estadoJuego = "GANASTE!!!";
  }
  else{
    this.perdidos = this.perdidos +1;
    this.estadoJuego = "PERDISTE!!!";
  }
  this.valor1 = this.valor2;
}

}
