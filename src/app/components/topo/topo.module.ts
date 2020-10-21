import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login-component/login.component';
import { LogadoComponent } from './logado-component/logado.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        LogadoComponent,
        LoginComponent,
    ],
    exports: [
        LogadoComponent,
        LoginComponent,
    ], 
    imports: [
        FormsModule,
        CommonModule,
    ]
})
export class TopoModule{}