import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { TheorySecuenciaComponent } from "./theory-secuencia/theory-secuencia.component";
import { Ejemplo1Component } from "./ejemplos/ejemplo1/ejemplo1.component";
import { Ejemplo2Component } from "./ejemplos/ejemplo2/ejemplo2.component";
import { OperadoresTheoryComponent } from "./operadores-theory/operadores-theory.component";


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
        path:'operadores',
        component:OperadoresTheoryComponent,
      },
      {
        path:'tipos-datos/ejemplo1',
        component:Ejemplo1Component,
      },
      {
        path:'tipos-datos/ejemplo2',
        component:Ejemplo2Component,
      }
    ]
  },
]
