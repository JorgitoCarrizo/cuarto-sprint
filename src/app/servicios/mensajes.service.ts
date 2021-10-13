import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';
import { Usuario } from '../page/clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {


  constructor(private db:AngularFirestore) { 
    

  }
  
  public async traerDatos(){
    const aux = await this.db.collection("mensajes");
    return aux.get()
    
  }
  public guardarDatos(){
    const aux =  this.db.collection("mensajes");
    return aux;
    
  }
  
}
