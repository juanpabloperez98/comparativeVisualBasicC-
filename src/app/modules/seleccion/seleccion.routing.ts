import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { SimplesydoblesComponent } from "./simplesydobles/simplesydobles.component";
import { Ejemplo1Component } from "./ejemplosSimples/ejemplo1/ejemplo1.component";
import { MultiplesComponent } from "./multiples/multiples.component";
import { Ejemplo2Component } from "./ejemplosSimples/ejemplo2/ejemplo2.component";
import { Ejemplo3Component } from "./ejemplosSimples/ejemplo3/ejemplo3.component";
import { Ejemplo4Component } from "./ejemplosSimples/ejemplo4/ejemplo4.component";
import { Ejemplo5Component } from "./ejemplosSimples/ejemplo5/ejemplo5.component";



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
      {
        path:'simples-dobles/ejemplo4',
        component:Ejemplo4Component,
      },
      {
        path:'simples-dobles/ejemplo5',
        component:Ejemplo5Component,
      },
    ]
  },
]
