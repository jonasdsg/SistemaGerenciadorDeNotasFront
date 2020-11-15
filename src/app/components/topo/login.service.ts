import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class LoginService{
    private logado:boolean = false;

    public validarLogin(usuario:string,senha:string):boolean{
        const login = 'default';
        const pass = 'default'
        if(usuario==login && pass==senha)
            this.logado = true;
        return this.logado;
    }

    public estaLogado(){
        return this.logado;
    }
}