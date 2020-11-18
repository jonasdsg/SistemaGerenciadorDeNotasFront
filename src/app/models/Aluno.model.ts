import { AvaliacaoModel } from './Avaliacao.model';

export interface AlunoModel {
    nome:string;
    matricula:string;
    avaliacao:AvaliacaoModel;
}

export interface AlunosLista extends Array<AlunoModel>{
}