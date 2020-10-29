import { AlunoModel } from './../../../models/Aluno.model';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'sgn-listar-alunos',
    templateUrl: './listar-alunos.component.html',
})
export class ListarAlunosComponent implements OnInit, OnChanges{
    @Input() alunos:AlunoModel[];
    public exibirNotasAluno:boolean = false;

    constructor(){
        this.alunos = <AlunoModel[]> JSON.parse(localStorage.getItem('alunos'));
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        let a = new AlunoModel(this.alunos[0]._nome,this.alunos[0]._matricula);
        a.notas = this.alunos[0].notas;
        console.log(a.av3())
    }
    
    ngOnInit(): void {
    }

    exibirNotas(){
        if(this.exibirNotasAluno)
            this.exibirNotasAluno = false;
        else
            this.exibirNotasAluno = true;
    }
}