import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { seleccionRoutes } from './seleccion.routing';
import { SimplesydoblesComponent } from './simplesydobles/simplesydobles.component';
import { MultiplesComponent } from './multiples/multiples.component';
import { Ejemplo1Component } from './ejemplosSimples/ejemplo1/ejemplo1.component';
import { FormsModule } from '@angular/forms';
import { Ejemplo2Component } from './ejemplosSimples/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplosSimples/ejemplo3/ejemplo3.component';



@NgModule({
  declarations: [
    MainComponent,
    SimplesydoblesComponent,
    MultiplesComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(seleccionRoutes),
    FormsModule,
  ]
})
export class SeleccionModule { }
