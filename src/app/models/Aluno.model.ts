import { ModeloAvaliacao } from '../interfaces/modelo-avaliacao.interface';
import { AvaliacaoInterface } from './../interfaces/avaliacao.interface';
import { PessoaModel } from './Pessoa.model';

export class AlunoModel extends PessoaModel implements AvaliacaoInterface{
    
    notas:ModeloAvaliacao;
    constructor(
        nome:string,
        email:string,
        matricula:string,
        senha:string){
            super(nome,email,matricula,senha);
    }
    
    media(avaliacao: ModeloAvaliacao): number {
        throw new Error('Method not implemented.');
    }
    
}