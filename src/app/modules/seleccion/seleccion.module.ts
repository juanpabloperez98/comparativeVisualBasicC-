import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { seleccionRoutes } from './seleccion.routing';
import { SimplesydoblesComponent } from './simplesydobles/simplesydobles.component';
import { MultiplesComponent } from './multiples/multiples.component';
import { Ejemplo1Component } from './ejemplosSimples/ejemplo1/ejemplo1.component';



@NgModule({
  declarations: [
    MainComponent,
    SimplesydoblesComponent,
    MultiplesComponent,
    Ejemplo1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(seleccionRoutes)
  ]
})
export class SeleccionModule { }
