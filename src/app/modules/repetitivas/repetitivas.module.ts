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
import { EjemploFor4Component } from './ejemplosFor/ejemplo-for4/ejemplo-for4.component';
import { EjemploFor5Component } from './ejemplosFor/ejemplo-for5/ejemplo-for5.component';
import { EjemploWhile1Component } from './ejemplosWhile/ejemplo-while1/ejemplo-while1.component';
import { EjemploWhile2Component } from './ejemplosWhile/ejemplo-while2/ejemplo-while2.component';
import { EjemploWhile3Component } from './ejemplosWhile/ejemplo-while3/ejemplo-while3.component';
import { EjemploWhile4Component } from './ejemplosWhile/ejemplo-while4/ejemplo-while4.component';


@NgModule({
  declarations: [
    ForComponent,
    WhileComponent,
    MainComponent,
    EjemploFor1Component,
    EjemploFor2Component,
    EjemploFor3Component,
    EjemploFor4Component,
    EjemploFor5Component,
    EjemploWhile1Component,
    EjemploWhile2Component,
    EjemploWhile3Component,
    EjemploWhile4Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(repetitivasRoutes),
    FormsModule
  ]
})
export class RepetitivasModule { }
