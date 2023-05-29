import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ForComponent } from "./for/for.component";
import { WhileComponent } from "./while/while.component";



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
      {
        path:'while',
        component:WhileComponent,
      },
    ]
  },
]
