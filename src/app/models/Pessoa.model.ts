export abstract class PessoaModel{
    constructor(
        protected _nome:  string, 
        protected _email: string, 
        protected _matricula: string,
        protected _senha: string
        ){}
    get nome():string{
        return this._nome;
    }
    set nome(nome){
        if(nome.length)
            this._nome = nome;
    }
    get senha():string{
        return this._senha;
    }
    set senha(senha){
        if(senha.length>=6){
            this._senha = senha;
        }
    }
}