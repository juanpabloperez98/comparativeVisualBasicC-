import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { secuenciaRoutes } from './secuencia.routing';
import { TheorySecuenciaComponent } from './theory-secuencia/theory-secuencia.component';
import { Ejemplo1Component } from './ejemplos/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplos/ejemplo2/ejemplo2.component';


@NgModule({
  declarations: [
    MainComponent,
    TheorySecuenciaComponent,
    Ejemplo1Component,
    Ejemplo2Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(secuenciaRoutes)
  ],
  exports:[
    MainComponent
  ]
})
export class SecuenciaModule { }
