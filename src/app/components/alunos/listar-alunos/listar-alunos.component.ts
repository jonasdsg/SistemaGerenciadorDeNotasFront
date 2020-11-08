import { ListarAlunosService } from './listar-alunos.service';
import { AlunoModel } from './../../../models/Aluno.model';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'sgn-listar-alunos',
    templateUrl: './listar-alunos.component.html',
})
export class ListarAlunosComponent implements OnInit, OnChanges{
    @Input() alunos:AlunoModel[];
    public exibirNotasAluno:boolean = false;

    constructor(listarAlunosService:ListarAlunosService){
        this.alunos = listarAlunosService.Alunos;
    }
    
    ngOnChanges(changes: SimpleChanges): void {
    }
    
    ngOnInit(): void {}

    exibirNotas(){
        if(this.exibirNotasAluno)
            this.exibirNotasAluno = false;
        else
            this.exibirNotasAluno = true;
    }
}