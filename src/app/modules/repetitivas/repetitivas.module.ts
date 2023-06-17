import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForComponent } from './for/for.component';
import { WhileComponent } from './while/while.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { repetitivasRoutes } from './repetitivas.routing';
import { EjemploFor1Component } from './ejemplosFor/ejemplo-for1/ejemplo-for1.component';
import { FormsModule } from '@angular/forms';
import { EjemploFor2Component } from './ejemplosFor/ejemplo-for2/ejemplo-for2.component';
import { EjemploFor3Component } from './ejemplosFor/ejemplo-for3/ejemplo-for3.component';


@NgModule({
  declarations: [
    ForComponent,
    WhileComponent,
    MainComponent,
    EjemploFor1Component,
    EjemploFor2Component,
    EjemploFor3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(repetitivasRoutes),
    FormsModule
  ]
})
export class RepetitivasModule { }
