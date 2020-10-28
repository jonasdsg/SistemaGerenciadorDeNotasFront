import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sgn-notas-aluno',
    templateUrl: 'notas.component.html'
})
export class NotasComponent implements OnInit{
    
    formNotasAluno:FormGroup;
    
    constructor(
        private formBuilder:FormBuilder,
    ){}

    ngOnInit(): void {
        this.formNotasAluno = this.formBuilder.group({
            aps1:[],
            av1:[],
            aps2:[],
            av2:[],
            av3:[],
        })
    }
}