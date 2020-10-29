import { ModeloAvaliacao } from '../interfaces/modelo-avaliacao.interface';
import { AvaliacaoInterface } from './../interfaces/avaliacao.interface';
import { PessoaModel } from './Pessoa.model';

export class AlunoModel extends PessoaModel implements AvaliacaoInterface{
    
    private _notas:ModeloAvaliacao;

    constructor(
        public _nome:string,
        public _matricula:string,
        ){
        super(_nome,_matricula);
    }
    
    set notas(notas:ModeloAvaliacao){
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
        return this.maior(
            Number(this.av1())+Number(this.av2),
            Number(this.av1())+Number(this.av3),
            Number(this.av2())+Number(this.av3)
        );
    }

    maior(...soma:Array<number>): number {
        return soma.reduce((anterior,atual)=>{
            return atual>anterior ? atual : anterior;
        });
    }
    
}
