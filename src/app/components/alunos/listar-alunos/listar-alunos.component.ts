import { ListarAlunosService } from './listar-alunos.service';
import { AlunoModel, AlunosLista } from './../../../models/Aluno.model';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'sgn-listar-alunos',
    templateUrl: './listar-alunos.component.html',
})
export class ListarAlunosComponent implements OnInit, OnChanges{
    @Input() alunos:Array<AlunoModel>;
    public exibirNotasAluno:boolean = false;
    public exibirNotasAlunoNome:string = '';

    constructor(private listarAlunosService:ListarAlunosService){
        this.listarAlunosService.Alunos
            .subscribe((alunos:AlunosLista)=>{

            this.alunos = alunos; 
            console.log(alunos.length)
        });
    }
    
    ngOnChanges(changes: SimpleChanges): void {
    }
    
    ngOnInit(): void {}

    exibirNotas(nome){
        this.exibirNotasAlunoNome = nome;
        if(this.exibirNotasAluno)
            this.exibirNotasAluno = false;
        else
            this.exibirNotasAluno = true;
    }

    delete(matricula){
        this.listarAlunosService.removeAluno(matricula)
    }

    media(notas): number {
        
        
        return this.maior(
            (Number(notas.aps1)+Number(notas.av1)+Number(notas.aps2)+Number(notas.av2))/2,
            (Number(notas.aps1)+Number(notas.av1)+Number(notas.av3))/2,
            (Number(notas.av2)+Number(notas.av3))/2
        );
    }

    maior(...soma:Array<number>): number {
        let maior = soma[0];
        for(let i = 0; i < soma.length; i++){
            if(maior<soma[i])
                maior = soma[i];
        }
        return maior;
    }
    
}