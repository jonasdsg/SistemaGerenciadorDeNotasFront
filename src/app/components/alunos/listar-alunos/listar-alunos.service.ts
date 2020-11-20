import { AlunoModel, AlunosLista } from './../../../models/Aluno.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
    providedIn: 'root',
})
export class ListarAlunosService{
    private alunos:AlunoModel[] = [];
    private URL:string = 'http://localhost:8080/alunos';
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    constructor(private http:HttpClient){}

    get Alunos(): Array<AlunoModel>{
        this.http.get(this.URL).subscribe((alunos)=>{
            let array = alunos as AlunosLista;
            array.forEach(aluno=>this.alunos.push(aluno as AlunoModel))
        })
        return this.alunos;
     
    }

    removeAluno(matricula:string){
        let al:AlunoModel;
        this.alunos.forEach(aluno=>{
            if(aluno.matricula==matricula)
                al = aluno;
        })
        this.alunos.splice(this.alunos.indexOf(al),1);
        return this.http.delete(`${this.URL}\\${matricula}`,this.httpOptions).subscribe()
    }

    adicionarAlunos(aluno:AlunoModel):boolean{
        this.alunos.push(aluno);
        this.http.post<AlunoModel>(this.URL,JSON.stringify(aluno),this.httpOptions).subscribe(
        );
        return true;
    }
    
}