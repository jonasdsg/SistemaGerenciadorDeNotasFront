import { AlunoModel } from './../../../models/Aluno.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ListarAlunosService{
    private alunos:AlunoModel[]=[];
    constructor(){
        this.alunos = JSON.parse(localStorage.getItem('alunos'));
    }
    get Alunos():Array<AlunoModel>{
        return this.alunos;
    }
}