import { PessoaModel } from './Pessoa.model';

export class ProfessorModel extends PessoaModel{
    constructor(
        nome:string,
        email:string,
        matricula:string,
        senha:string){
            super(nome,email,matricula,senha);
        }
       
}