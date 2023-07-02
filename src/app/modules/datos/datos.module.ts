import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListasComponent } from './listas/listas.component';
import { MatricesComponent } from './matrices/matrices.component';
import { datosRoutes } from './datos.routing';
import { EjemploListas1Component } from './ejemplosListas/ejemplo-listas1/ejemplo-listas1.component';
import { FormsModule } from '@angular/forms';
import { EjemploListas2Component } from './ejemplosListas/ejemplo-listas2/ejemplo-listas2.component';
import { EjemploListas3Component } from './ejemplosListas/ejemplo-listas3/ejemplo-listas3.component';
import { EjemploMatrices1Component } from './ejemploMatrices/ejemplo-matrices1/ejemplo-matrices1.component';
import { EjemploMatrices2Component } from './ejemploMatrices/ejemplo-matrices2/ejemplo-matrices2.component';
import { EjemploMatrices3Component } from './ejemploMatrices/ejemplo-matrices3/ejemplo-matrices3.component';



@NgModule({
  declarations: [
    MainComponent,
    ListasComponent,
    MatricesComponent,
    EjemploListas1Component,
    EjemploListas2Component,
    EjemploListas3Component,
    EjemploMatrices1Component,
    EjemploMatrices2Component,
    EjemploMatrices3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(datosRoutes),
    FormsModule,
  ]
})
export class DatosModule { }
