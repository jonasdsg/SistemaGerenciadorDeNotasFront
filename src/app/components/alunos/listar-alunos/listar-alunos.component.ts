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

    media(notas): number {
        
        
        return this.maior(
            (Number(notas.aps1)+Number(notas.av1)+Number(notas.aps2)+Number(notas.av2))/2,
            (Number(notas.aps1)+Number(notas.av1)+Number(notas.av3))/2,
            (Number(notas.av2)+Number(notas.av3))/2
        );
    }

    maior(...soma:Array<number>): number {
        console.log(soma)
        let maior = soma[0];
        for(let i = 0; i < soma.length; i++){
            if(maior<soma[i])
                maior = soma[i];
        }
        return maior;
    }
    
}