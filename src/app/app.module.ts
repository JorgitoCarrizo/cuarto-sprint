import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { ErrorComponent } from './page/error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { AhorcadoComponent } from './page/ahorcado/ahorcado.component';
import { RegisterComponent } from './page/register/register.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { Modal } from 'bootstrap';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as $ from "jquery";
import * as bootstrap from "bootstrap";
import { MayorMenorComponent } from './page/mayor-menor/mayor-menor.component';
import { ChatRoomComponent } from './page/chat-room/chat-room.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    QuienSoyComponent,
    AhorcadoComponent,
    RegisterComponent,
    NavbarComponent,
    MayorMenorComponent,
    ChatRoomComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NgbModule,
    NgbModalModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
