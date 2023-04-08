import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { TheorySecuenciaComponent } from "./theory-secuencia/theory-secuencia.component";
import { Ejemplo1Component } from "./ejemplos/ejemplo1/ejemplo1.component";


export const secuenciaRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path:'intro',
        component:MainComponent,
      },
      {
        path:'tipos-datos',
        component:TheorySecuenciaComponent,
      },
      {
        path:'tipos-datos/ejemplo1',
        component:Ejemplo1Component,
      }
    ]
  },
]
