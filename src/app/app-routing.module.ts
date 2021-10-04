import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AhorcadoComponent } from './page/ahorcado/ahorcado.component';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { ErrorComponent } from './page/error/error.component';
import { LoginComponent } from './page/login/login.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'error',component:ErrorComponent},
  {path:'bienvenido',component:BienvenidoComponent},
  {path:'quienSoy',component:QuienSoyComponent},
  {path:'ahorcado',component:AhorcadoComponent},
  {path:'register',component:RegisterComponent},
  
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
