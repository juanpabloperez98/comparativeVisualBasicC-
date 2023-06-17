import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ForComponent } from "./for/for.component";
import { WhileComponent } from "./while/while.component";
import { EjemploFor1Component } from "./ejemplosFor/ejemplo-for1/ejemplo-for1.component";



export const repetitivasRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path:'intro',
        component:MainComponent,
      },
      {
        path:'for',
        component:ForComponent,
      },
      {
        path:'while',
        component:WhileComponent,
      },
      {
        path:'for/ejemplo1',
        component:EjemploFor1Component,
      },
    ]
  },
]
