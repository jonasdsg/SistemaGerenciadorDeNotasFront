import { ModeloAvaliacao } from '../interfaces/modelo-avaliacao.interface';
import { AvaliacaoInterface } from './../interfaces/avaliacao.interface';
import { PessoaModel } from './Pessoa.model';

export class AlunoModel extends PessoaModel{
    
    public _notas:ModeloAvaliacao;

    constructor(
        public _nome:string,
        public _matricula:string,
        ){
        super(_nome,_matricula);
    }
    
    notas(notas:ModeloAvaliacao){
        this._notas = notas;
    }
    
    av1(): number {
        return this._notas.aps1+this._notas.av1;
    }
    
    av2(): number {
        return this._notas.aps2+this._notas.aps2;
    }
    av3(): number {
        return this._notas.av3;
    }
    
    media(): number {
        const notas = this._notas;
        return this.maior(
            (notas.aps1+notas.av1+notas.aps2+notas.av2)/2,
            (notas.aps1+notas.av1+notas.av3)/2,
            (notas.av2+notas.av3)/2
        );
    }

    maior(...soma:Array<number>): number {
        return soma.reduce((anterior,atual)=>{
            return atual>anterior ? atual : anterior;
        });
    }
    
}
