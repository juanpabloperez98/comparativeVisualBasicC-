import { Routes } from "@angular/router";
import { OperadoresTheoryComponent } from "./operadores-theory/operadores-theory.component";



export const operadoresRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path:'operadores',
        component:OperadoresTheoryComponent,
      }
    ]
  },
]
