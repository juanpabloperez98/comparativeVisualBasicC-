import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { FuncionComponent } from "./funcion/funcion.component";

export const funcionRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path:'intro',
        component:MainComponent,
      },
      {
        path:'funciones',
        component:FuncionComponent,
      },
    ]
  },
]
