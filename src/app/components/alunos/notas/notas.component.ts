import { ModeloAvaliacao } from './../../../interfaces/modelo-avaliacao.interface';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, OnChanges, SimpleChanges, Input, AfterViewInit } from '@angular/core';

@Component({
    selector: 'sgn-notas-aluno',
    templateUrl: 'notas.component.html'
})
export class NotasComponent implements OnChanges, OnInit{
    
    @Output() emissorDeNotas =  new EventEmitter();
    formNotasAluno:FormGroup;
    @Input() receberNotas:ModeloAvaliacao;

    constructor(
        private formBuilder:FormBuilder){

    }
    
    ngOnInit(): void {
        if(!this.formNotasAluno){
            this.formNotasAluno = this.formBuilder.group({
                av1:[],
                av2:[],
                av3:[],
                aps1:[],
                aps2:[],
            })
        }
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
        console.log(this.receberNotas)
        if(!this.formNotasAluno){
            this.formNotasAluno = this.formBuilder.group({
                av1:[this.receberNotas.av1],
                av2:[this.receberNotas.av2],
                av3:[this.receberNotas.av3],
                aps1:[this.receberNotas.aps1],
                aps2:[this.receberNotas.aps2],
            })
        }
        console.log(this.formNotasAluno)
    }


    emiteNotas(){
        let notas = this.formNotasAluno.value;
        this.emissorDeNotas.emit(notas as ModeloAvaliacao);
    }
}