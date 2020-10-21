import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotasComponent } from './notas/notas.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { CadastrarAlunoComponent } from './cadastrar-aluno/cadastrar-aluno.component';
import { NgModule } from '@angular/core';

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
    ]

})
export class AlunosModule{

}