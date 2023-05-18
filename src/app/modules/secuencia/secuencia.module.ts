import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { secuenciaRoutes } from './secuencia.routing';
import { TheorySecuenciaComponent } from './theory-secuencia/theory-secuencia.component';
import { Ejemplo1Component } from './ejemplos/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplos/ejemplo2/ejemplo2.component';
import { OperadoresTheoryComponent } from './operadores-theory/operadores-theory.component';
import { Ejemplo1OperadoresComponent } from './ejemplosOperadores/ejemplo1/ejemplo1/ejemplo1.component';
import { Ejemplo2OperadoresComponent } from './ejemplosOperadores/ejemplo2/ejemplo2.component';
import { Ejemplo3OperadoresComponent } from './ejemplosOperadores/ejemplo3/ejemplo3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    TheorySecuenciaComponent,
    OperadoresTheoryComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo1OperadoresComponent,
    Ejemplo2OperadoresComponent,
    Ejemplo3OperadoresComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(secuenciaRoutes),
    FormsModule,
  ],
  exports:[
    MainComponent
  ]
})
export class SecuenciaModule { }
