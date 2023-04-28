import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { SimplesydoblesComponent } from "./simplesydobles/simplesydobles.component";



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
    ]
  },
]
