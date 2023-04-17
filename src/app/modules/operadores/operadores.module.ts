import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperadoresTheoryComponent } from './operadores-theory/operadores-theory.component';
import { RouterModule } from '@angular/router';
import { operadoresRoutes } from './secuencia.routing';



@NgModule({
  declarations: [
    OperadoresTheoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(operadoresRoutes)
  ]
})
export class OperadoresModule { }
