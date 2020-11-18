import { AlunoModel, AlunosLista } from './../../../models/Aluno.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ListarAlunosService{
    private alunos:any;
    private tmp = "[{\"_nome\":\"Jonas\",\"_matricula\":\"234929349239492\",\"_notas\":{\"av1\":\"6\",\"av2\":\"8\",\"av3\":\"9\",\"aps1\":\"2\",\"aps2\":\"1\"}},{\"_nome\":\"Maria\",\"_matricula\":\"2323232323\",\"_notas\":{\"av1\":\"2\",\"av2\":\"2\",\"av3\":\"7\",\"aps1\":\"2\",\"aps2\":\"3\"}},{\"_nome\":\"Carla\",\"_matricula\":\"338272727281\",\"_notas\":{\"av1\":\"6\",\"av2\":\"8\",\"av3\":\"7\",\"aps1\":\"1\",\"aps2\":\"2\"}},{\"_nome\":\"Cirilo\",\"_matricula\":\"272362837436\",\"_notas\":{\"av1\":\"8\",\"av2\":\"4\",\"av3\":\"2\",\"aps1\":\"2\",\"aps2\":\"0\"}}]";
    constructor(private http:HttpClient){
        this.alunos = this.http.get('http://localhost:8080/alunos');
    }
    get Alunos():Observable<AlunosLista>{
        return this.alunos;
    }

    removeAluno(matricula):boolean{
        let removed:boolean = false;
        this.alunos.forEach(aluno => {
            if(aluno._matricula==matricula){
                this.alunos.splice(this.alunos.indexOf(aluno),1);
                removed = true;
            }
        })
        return removed;
    }

    adicionarAlunos(aluno:AlunoModel):boolean{
        if(aluno){
            this.alunos.push(aluno);
            return true;
        }
        return false;
    }
    
}