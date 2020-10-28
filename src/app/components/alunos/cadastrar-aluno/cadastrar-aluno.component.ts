import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'sgn-cadastrar-aluno',
    templateUrl: './cadastrar-aluno.component.html'
})
export class CadastrarAlunoComponent implements OnInit{
    
    public cadastroAlunoForm: FormGroup;
    
    constructor(
        private formBuilder:FormBuilder,
    ){}
    
    ngOnInit(): void {
        this.cadastroAlunoForm = this.formBuilder.group({
            nome: ['',Validators.required],
            matricula: ['',Validators.required],
            notas: [],

        })
    }
}