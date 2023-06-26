import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListasComponent } from './listas/listas.component';
import { MatricesComponent } from './matrices/matrices.component';
import { datosRoutes } from './datos.routing';
import { EjemploListas1Component } from './ejemplosListas/ejemplo-listas1/ejemplo-listas1.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    ListasComponent,
    MatricesComponent,
    EjemploListas1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(datosRoutes),
    FormsModule,
  ]
})
export class DatosModule { }
