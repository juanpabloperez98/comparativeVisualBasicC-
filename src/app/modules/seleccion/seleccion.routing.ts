import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { SimplesydoblesComponent } from "./simplesydobles/simplesydobles.component";
import { Ejemplo1Component } from "./ejemplosSimples/ejemplo1/ejemplo1.component";



export const seleccionRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path:'intro',
        component:MainComponent,
      },
      {
        path:'simples-dobles',
        component:SimplesydoblesComponent,
      },
      {
        path:'ejemplo1',
        component:Ejemplo1Component,
      },
    ]
  },
]
