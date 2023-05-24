import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { SimplesydoblesComponent } from "./simplesydobles/simplesydobles.component";
import { Ejemplo1Component } from "./ejemplosSimples/ejemplo1/ejemplo1.component";
import { MultiplesComponent } from "./multiples/multiples.component";
import { Ejemplo2Component } from "./ejemplosSimples/ejemplo2/ejemplo2.component";
import { Ejemplo3Component } from "./ejemplosSimples/ejemplo3/ejemplo3.component";



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
        path:'multiples',
        component:MultiplesComponent,
      },
      {
        path:'simples-dobles/ejemplo1',
        component:Ejemplo1Component,
      },
      {
        path:'simples-dobles/ejemplo2',
        component:Ejemplo2Component,
      },
      {
        path:'simples-dobles/ejemplo3',
        component:Ejemplo3Component,
      },
    ]
  },
]
