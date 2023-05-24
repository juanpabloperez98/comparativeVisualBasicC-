import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ForComponent } from "./for/for.component";



export const repetitivasRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path:'intro',
        component:MainComponent,
      },
      {
        path:'for',
        component:ForComponent,
      },
    ]
  },
]
