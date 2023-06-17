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
import { Ejemplo4Component } from './ejemplosSimples/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './ejemplosSimples/ejemplo5/ejemplo5.component';
import { EjemploMultiples1Component } from './ejemplosMultiples/ejemplo-multiples1/ejemplo-multiples1.component';
import { EjemploMultiples2Component } from './ejemplosMultiples/ejemplo-multiples2/ejemplo-multiples2.component';
import { EjemploMultiples3Component } from './ejemplosMultiples/ejemplo-multiples3/ejemplo-multiples3.component';
import { EjemploMultiples4Component } from './ejemplosMultiples/ejemplo-multiples4/ejemplo-multiples4.component';
import { EjemploMultiples5Component } from './ejemplosMultiples/ejemplo-multiples5/ejemplo-multiples5.component';



@NgModule({
  declarations: [
    MainComponent,
    SimplesydoblesComponent,
    MultiplesComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo4Component,
    Ejemplo5Component,
    EjemploMultiples1Component,
    EjemploMultiples2Component,
    EjemploMultiples3Component,
    EjemploMultiples4Component,
    EjemploMultiples5Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(seleccionRoutes),
    FormsModule,
  ]
})
export class SeleccionModule { }
