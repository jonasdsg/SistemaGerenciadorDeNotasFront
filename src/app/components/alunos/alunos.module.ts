import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotasComponent } from './notas/notas.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { CadastrarAlunoComponent } from './cadastrar-aluno/cadastrar-aluno.component';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations:[
        CadastrarAlunoComponent,
        ListarAlunosComponent,
        NotasComponent,
    ],
    exports:[
        CadastrarAlunoComponent,
        ListarAlunosComponent,
        NotasComponent,
    ],
    imports:[
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
    ]

})
export class AlunosModule{

}