import { LoginService } from './../login.service';
import { Component } from '@angular/core';

@Component({
    selector:'sgn-login',
    templateUrl: './login.component.html',
})
export class LoginComponent{ 
    public senhaInvalida:boolean = false;
    public usuario:string='';
    public senha:string='';
    constructor(private loginService:LoginService){}
    logar(){
        this.senhaInvalida = !this.loginService.validarLogin(this.usuario,this.senha);
    }
}