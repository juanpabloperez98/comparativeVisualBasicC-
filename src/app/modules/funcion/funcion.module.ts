import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionComponent } from './funcion/funcion.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { funcionRoutes } from './funcion.routing';



@NgModule({
  declarations: [
    FuncionComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(funcionRoutes),
  ]
})
export class FuncionModule { }
