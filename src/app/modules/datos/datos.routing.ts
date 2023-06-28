import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ListasComponent } from "./listas/listas.component";
import { MatricesComponent } from "./matrices/matrices.component";
import { EjemploListas1Component } from "./ejemplosListas/ejemplo-listas1/ejemplo-listas1.component";
import { EjemploListas2Component } from "./ejemplosListas/ejemplo-listas2/ejemplo-listas2.component";
import { EjemploListas3Component } from "./ejemplosListas/ejemplo-listas3/ejemplo-listas3.component";



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
      {
        path:'listas/ejemplo2',
        component:EjemploListas2Component,
      },
      {
        path:'listas/ejemplo3',
        component:EjemploListas3Component,
      },
    ]
  },
]
