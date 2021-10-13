import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { first } from 'rxjs/operators';


@Injectable()
export class AuthService {

  //public user:User;

  constructor(public afAuth: AngularFireAuth) { }

  async login(email:string,pasword:string){
    
    
      const resultado = await this.afAuth.signInWithEmailAndPassword(email,pasword);
      console.log(resultado);
      return resultado;
    
      
        
  }
  async register(email:string,pasword:string){
    
      const resultado = await this.afAuth.createUserWithEmailAndPassword(email,pasword);
      return resultado;
    
    
      console.log("error");
      
    
    
  }

  async logOut(){
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
    
  }
  async getCurrentUser(){
     return this.afAuth.authState.pipe(first()).toPromise();
  }
}
