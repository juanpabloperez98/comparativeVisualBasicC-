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



@NgModule({
  declarations: [
    MainComponent,
    ListasComponent,
    MatricesComponent,
    EjemploListas1Component,
    EjemploListas2Component,
    EjemploListas3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(datosRoutes),
    FormsModule,
  ]
})
export class DatosModule { }
