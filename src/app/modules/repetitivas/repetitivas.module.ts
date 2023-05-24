import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForComponent } from './for/for.component';
import { WhileComponent } from './while/while.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { repetitivasRoutes } from './repetitivas.routing';


@NgModule({
  declarations: [
    ForComponent,
    WhileComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(repetitivasRoutes),
  ]
})
export class RepetitivasModule { }
