import { AvaliacaoModel } from '../../../models/Avaliacao.model';
import { ListarAlunosService } from './../listar-alunos/listar-alunos.service';
import { AlunoModel } from './../../../models/Aluno.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'sgn-cadastrar-aluno',
    templateUrl: './cadastrar-aluno.component.html'
})
export class CadastrarAlunoComponent implements OnInit{
    
    public cadastroAlunoForm: FormGroup;
    public notas:AvaliacaoModel;
    constructor(
        private service:ListarAlunosService,
        private formBuilder:FormBuilder,
    ){}
    
    ngOnInit(): void {
        this.cadastroAlunoForm = this.formBuilder.group({
            nome: ['',Validators.required],
            matricula: ['',Validators.required],
        });
    }

    recebeNotasAluno(notas:AvaliacaoModel){
        this.notas=notas;
    }

    salvarAluno(){
        const cadastro:AlunoModel = this.cadastroAlunoForm.value;
        this.service.adicionarAlunos(cadastro);
        this.cadastroAlunoForm.reset();
    }
}