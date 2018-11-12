import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  usuario:string;
  senha:string;
  repass:string;
  constructor() { }

  ngOnInit() {
  }

  registrar(){
    if(this.usuario.length==0 || this.senha.length==0 || this.repass.length==0){
      alert("Por favor preencha todos os campos!!!");
    }
  }
}
