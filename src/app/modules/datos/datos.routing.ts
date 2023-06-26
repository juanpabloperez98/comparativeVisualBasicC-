import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ListasComponent } from "./listas/listas.component";
import { MatricesComponent } from "./matrices/matrices.component";
import { EjemploListas1Component } from "./ejemplosListas/ejemplo-listas1/ejemplo-listas1.component";



export const datosRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path:'intro',
        component:MainComponent,
      },
      {
        path:'listas',
        component:ListasComponent,
      },
      {
        path:'matrices',
        component:MatricesComponent,
      },
      {
        path:'listas/ejemplo1',
        component:EjemploListas1Component,
      },
    ]
  },
]
