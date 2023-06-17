import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForComponent } from './for/for.component';
import { WhileComponent } from './while/while.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { repetitivasRoutes } from './repetitivas.routing';
import { EjemploFor1Component } from './ejemplosFor/ejemplo-for1/ejemplo-for1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ForComponent,
    WhileComponent,
    MainComponent,
    EjemploFor1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(repetitivasRoutes),
    FormsModule
  ]
})
export class RepetitivasModule { }
