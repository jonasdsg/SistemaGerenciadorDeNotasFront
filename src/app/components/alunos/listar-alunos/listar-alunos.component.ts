import { AlunoModel } from './../../../models/Aluno.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sgn-listar-alunos',
    templateUrl: './listar-alunos.component.html',
})
export class ListarAlunosComponent implements OnInit{
    alunos:AlunoModel[];
    constructor(){

        this.alunos = <AlunoModel[]> JSON.parse(localStorage.getItem('alunos'));
    }

    ngOnInit(): void {
        console.log(this.alunos)
    }

    public exibirNotasAluno:boolean = false;
    exibirNotas(){
        if(this.exibirNotasAluno)
            this.exibirNotasAluno = false;
        else
            this.exibirNotasAluno = true;
    }
}