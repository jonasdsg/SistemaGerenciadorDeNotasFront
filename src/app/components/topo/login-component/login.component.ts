import { LoginService } from './../login.service';
import { Component } from '@angular/core';

@Component({
    selector:'sgn-login',
    templateUrl: './login.component.html',
})
export class LoginComponent{ 
    
    public usuario:string='default';
    public senha:string='default';
    constructor(private loginService:LoginService){}
    logar(){
        this.loginService.validarLogin(this.usuario,this.senha);
    }
}