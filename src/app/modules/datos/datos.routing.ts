import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ListasComponent } from "./listas/listas.component";
import { MatricesComponent } from "./matrices/matrices.component";
import { EjemploListas1Component } from "./ejemplosListas/ejemplo-listas1/ejemplo-listas1.component";
import { EjemploListas2Component } from "./ejemplosListas/ejemplo-listas2/ejemplo-listas2.component";
import { EjemploListas3Component } from "./ejemplosListas/ejemplo-listas3/ejemplo-listas3.component";
import { EjemploMatrices1Component } from "./ejemploMatrices/ejemplo-matrices1/ejemplo-matrices1.component";
import { EjemploMatrices2Component } from "./ejemploMatrices/ejemplo-matrices2/ejemplo-matrices2.component";
import { EjemploMatrices3Component } from "./ejemploMatrices/ejemplo-matrices3/ejemplo-matrices3.component";



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
      {
        path:'matrices/ejemplo1',
        component:EjemploMatrices1Component,
      },
      {
        path:'matrices/ejemplo2',
        component:EjemploMatrices2Component,
      },
      {
        path:'matrices/ejemplo3',
        component:EjemploMatrices3Component,
      },
    ]
  },
]
