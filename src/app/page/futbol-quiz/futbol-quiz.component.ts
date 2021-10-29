import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { EquiposFutbolService } from 'src/app/servicios/equipos-futbol.service';

@Component({
  selector: 'app-futbol-quiz',
  templateUrl: './futbol-quiz.component.html',
  styleUrls: ['./futbol-quiz.component.css'],
  providers: [AuthService],
})
export class FutbolQuizComponent implements OnInit {

  equipoArgentina!:any;
  equipoItalia!:any;
  equipoEspana!:any;
  Losequipos!:any;
  misEquiposArray=[{equipo:"",pais:""}];
  elemento1:any;
  elemento2:any;
  numero:any;
  correctas=0;
  constructor(private rutas:Router,private authSrv: AuthService, private equipos:EquiposFutbolService) { 
    this.Losequipos = equipos;
    
  }


  ngOnInit(): void {
    this.generar();
    
  }

  async generar(){
    var atras3:any = document.getElementById("contenedor-paises");
    atras3.style.pointerEvents = "none";
    this.elemento1 = null;
    this.elemento2 = null; 
    await this.Losequipos.equiposArgentina().subscribe((aux: any)=>{
      
      let elementos:any = aux
      
      this.equipoArgentina= elementos[Math.floor(Math.random() * elementos.length-1)]["team_badge"];
      this.misEquiposArray.push({equipo: this.equipoArgentina,pais:"Argentina"});
      
    })
    await this.Losequipos.equiposItalia().subscribe((aux: any)=>{
      let elementos:any = aux
      this.equipoItalia= elementos[Math.floor(Math.random() * elementos.length-1)]["team_badge"];
      this.misEquiposArray.push({equipo: this.equipoItalia,pais:"Italia"});
      
    })
    await this.Losequipos.equiposEspana().subscribe((aux: any)=>{
      let elementos:any = aux
      
      this.equipoEspana = elementos[Math.floor(Math.random() * elementos.length-1)]["team_badge"];
      this.misEquiposArray.push({equipo: this.equipoEspana,pais:"Espana"});
      
    })
    this.misEquiposArray.shift();
    console.log(this.misEquiposArray);
    
  }
  
  actionMethod($event: MouseEvent) {
    
    
    ($event.target as HTMLButtonElement).style.border = "gray 10px solid";
    if (($event.target as HTMLButtonElement).className == "botones botones-equipos"){
      
      if (this.elemento1 == null)
      {
        
        let aux = ($event.target as HTMLButtonElement).id;
        this.numero = aux;
        
        this.elemento1 = this.misEquiposArray[parseInt(aux)].pais;
        var auxiliar:any = document.getElementById("contenedor-equipos");
        auxiliar.style.pointerEvents = "none";
        var atras3:any = document.getElementById("contenedor-paises");
        atras3.style.pointerEvents = "auto";
        
        
      }
      
    }
    else{
      this.elemento2 = ($event.target as HTMLButtonElement).id;
      console.log(this.elemento2);
      
      var atras:any = document.getElementById("contenedor-paises");
      atras.style.pointerEvents = "auto"
      
    }
    if (this.elemento1 != null && this.elemento2 != null){
      if (this.elemento2 == this.elemento1)
          {
            ($event.target as HTMLButtonElement).style.border = "darkgreen 13px solid";
            ($event.target as HTMLButtonElement).style.pointerEvents = "none";
            var aux:any = document.getElementById(this.numero.toString());
            aux.style.border = "darkgreen 13px solid";     
            aux.style.pointerEvents = "none";
              
            var atras2:any = document.getElementById("contenedor-equipos");
            atras2.style.pointerEvents = "auto"   
            this.elemento1 = null;
            this.elemento2 = null;  
            var atras3:any = document.getElementById("contenedor-paises");
            atras3.style.pointerEvents = "none";
            this.correctas = this.correctas +1;
            if (this.correctas == 3)
            {
              console.log("aaaaaaaaaaaaa")
              this.correctas=0;
              this.showWinner();
            }
          }
          else {
            ($event.target as HTMLButtonElement).style.border = "red 13px solid";
              var aux:any = document.getElementById(this.numero.toString());
              aux.style.border = "red 13px solid";
              var atras:any = document.getElementById("contenedor-paises");
              atras.style.pointerEvents = "auto";
              var atras2:any = document.getElementById("contenedor-equipos");
              atras2.style.pointerEvents = "auto";
              
              this.showLooser();
               
          }
        }
        
  }

  CloseWinner() {
    var element:any = document.getElementById('winner');  
    element.style.display = "none";
    this.misEquiposArray= [];
    
    this.resetBotones();
    this.correctas=0;
    this.generar();
    
  }
   showWinner() {
    var element:any = document.getElementById('winner');  
    element.style.display = "block";
    
  }

  resetBotones(){
    for (let i = 0; i < 3; i++) {
        var elementoAux:any = document.getElementById([i].toString());
         
         elementoAux.style.border = "none";
       }
   var botones:any = document.getElementsByClassName("paises botones");
    for (let index = 0; index < botones.length; index++) {
      const element = botones[index];
      element.style.border = "none";
      
     }
     
     
  }
  
  CloseLooser() {
    var element:any = document.getElementById('looser');  
    element.style.display = "none";
    
    var atras:any = document.getElementById('back');
    atras.style.pointerEvents= "auto";
    this.misEquiposArray= [];
   
    setTimeout(() => {
      
    }, 2000);
    this.elemento1 = null;
    this.elemento2 = null; 
    this.resetBotones();
    this.correctas=0;
    this.generar();

  }
  
  showLooser() {
    var element:any = document.getElementById('looser');  
    var atras:any = document.getElementById('back');
    atras.style.pointerEvents= "none";
    element.style.display = "block";
     
  }
  
  irInicio(){
    this.rutas.navigate(['/bienvenido']);
  }
  
  

}
