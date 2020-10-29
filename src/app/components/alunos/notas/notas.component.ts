import { ModeloAvaliacao } from './../../../interfaces/modelo-avaliacao.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'sgn-notas-aluno',
    templateUrl: 'notas.component.html'
})
export class NotasComponent implements OnInit{
    
    @Output() emissorDeNotas =  new EventEmitter();
    formNotasAluno:FormGroup;
    
    constructor(
        private formBuilder:FormBuilder,
    ){}

    ngOnInit(): void {
        this.formNotasAluno = this.formBuilder.group({
            av1:[],
            av2:[],
            av3:[],
            aps1:[],
            aps2:[],
        })
    }

    emiteNotas(){
        let notas = this.formNotasAluno.value;
        this.emissorDeNotas.emit(notas as ModeloAvaliacao);
    }
}