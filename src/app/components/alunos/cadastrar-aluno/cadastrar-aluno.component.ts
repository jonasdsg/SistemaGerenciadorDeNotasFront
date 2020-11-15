import { ListarAlunosService } from './../listar-alunos/listar-alunos.service';
import { AlunoModel } from './../../../models/Aluno.model';
import { ModeloAvaliacao } from './../../../interfaces/modelo-avaliacao.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'sgn-cadastrar-aluno',
    templateUrl: './cadastrar-aluno.component.html'
})
export class CadastrarAlunoComponent implements OnInit{
    
    public cadastroAlunoForm: FormGroup;
    public notas:ModeloAvaliacao;
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

    recebeNotasAluno(notas:ModeloAvaliacao){
       
        this.notas=notas;
    }

    salvarAluno(){
        const cadastro = this.cadastroAlunoForm.value;
        let aluno = new AlunoModel(cadastro.nome,cadastro.matricula);
        aluno._notas = this.notas;
        this.service.adicionarAlunos(aluno);
        this.cadastroAlunoForm.reset();
    }
}