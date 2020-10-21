import { Component } from '@angular/core';

@Component({
    selector: 'sgn-listar-alunos',
    templateUrl: './listar-alunos.component.html',
})
export class ListarAlunosComponent{
    public exibirNotasAluno:boolean = false;
    
    exibirNotas(){
        if(this.exibirNotasAluno)
            this.exibirNotasAluno = false;
        else
            this.exibirNotasAluno = true;
    }
}