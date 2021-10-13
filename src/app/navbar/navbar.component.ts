import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user$ :Observable<any> = this.authSrv.afAuth.user;
  public isLogged = false;
  
  

  constructor(private rutas:Router,private authSrv: AuthService) { }

  async ngOnInit() { 
    const usuario = await this.authSrv.getCurrentUser();
    if(usuario){
      this.isLogged=true;
    }
    else{
      this.isLogged=false;
    }
    
  }

  quienSoy(){
    this.rutas.navigate(['/quienSoy']);
  }

  ahorcado(){
    this.rutas.navigate(['/ahorcado']);
  }
  goLogin(){
    this.rutas.navigate(['/login']);
  }

  goRegister(){
    this.rutas.navigate(['/register']);
  }

  async onLogOut(){
    await this.authSrv.logOut();
    this.rutas.navigate(['/login']);
  }

  chatRoom(){
    this.rutas.navigate(['/chatRoom']);
  }

}
