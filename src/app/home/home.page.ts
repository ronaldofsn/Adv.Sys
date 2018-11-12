import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario:string;
  senha:string;



  login(){
    console.log("Usuario: "+this.usuario);

    console.log("Senha: "+this.senha);
  }

  constructor(private router: Router) {}

  go() {
    this.router.navigateByUrl('/registrar');
  }


  /*goRegistrar(){
    this.navCtrl.push(RegistrarPage);
  }*/

}