import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Data } from '@angular/router';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { last } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/service/auth.service';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
  providers:[AuthService]
})
export class ChatRoomComponent implements OnInit {

  
  mostrarChat:boolean = false;
  usuarioLogeado:any;
  nuevoMensaje:string = '';
  mensajes:Array<any>=[];
  numero:number=0;

  constructor(private auth:AuthService, private mensajeServ:MensajesService,private db:AngularFirestore){}
   
    

  async ngOnInit(){
    
    this.usuarioLogeado  = await this.auth.getCurrentUser();
    console.log(this.usuarioLogeado);
    
    const otro = (await this.mensajeServ.traerDatos()).subscribe(aux =>{
      
      aux.docs.sort();

      aux.forEach(elemento => {
        this.mensajes.push(elemento.data());
        console.log(elemento.data());
      });
      this.numero = this.mensajes.length;
      

      // console.log(aux.data());
      // this.mensajes.push(aux.data());
    });
    
    
    

  }
      // to do when data is recieved
      
  
  

  async enviarMensaje(){
    var tiempo = new Date();
    
    if(this.nuevoMensaje==""){
      return;
    }
    let mensaje = {
      emisor: this.usuarioLogeado.email,
      texto: this.nuevoMensaje,
      hora: tiempo.getHours() + ":" + tiempo.getMinutes()
    }
    this.mensajes.push(mensaje);
    console.log(mensaje);
    this.nuevoMensaje= '';
    
    this.numero= this.numero +1;
    await this.mensajeServ.guardarDatos().doc(this.numero.toString()).set(Object.assign({}, this.mensajes[this.mensajes.length -1]));

    

    //this.mensajeServ.guardarDatos().add(Object.assign({}, this.mensajes));
    

    setTimeout(() => {
      this.scrollToTheLastElementByClassName();
    }, 20);
  }

  scrollToTheLastElementByClassName(){
    let elements = document.getElementsByClassName('msj');
    let ultimo: any = elements[(elements.length-1)];
    let toppos = ultimo.offsetTop;
    //@ts-ignore
    document.getElementById('contenedorDeMensajes')?.scrollTop=toppos;

  }

}
