import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ForComponent } from "./for/for.component";
import { WhileComponent } from "./while/while.component";
import { EjemploFor1Component } from "./ejemplosFor/ejemplo-for1/ejemplo-for1.component";
import { EjemploFor2Component } from "./ejemplosFor/ejemplo-for2/ejemplo-for2.component";
import { EjemploFor3Component } from "./ejemplosFor/ejemplo-for3/ejemplo-for3.component";
import { EjemploFor4Component } from "./ejemplosFor/ejemplo-for4/ejemplo-for4.component";
import { EjemploFor5Component } from "./ejemplosFor/ejemplo-for5/ejemplo-for5.component";
import { EjemploWhile1Component } from "./ejemplosWhile/ejemplo-while1/ejemplo-while1.component";
import { EjemploWhile2Component } from "./ejemplosWhile/ejemplo-while2/ejemplo-while2.component";
import { EjemploWhile3Component } from "./ejemplosWhile/ejemplo-while3/ejemplo-while3.component";



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
      {
        path:'for/ejemplo1',
        component:EjemploFor1Component,
      },
      {
        path:'for/ejemplo2',
        component:EjemploFor2Component,
      },
      {
        path:'for/ejemplo3',
        component:EjemploFor3Component,
      },
      {
        path:'for/ejemplo4',
        component:EjemploFor4Component,
      },
      {
        path:'for/ejemplo5',
        component:EjemploFor5Component,
      },
      {
        path:'while/ejemplo1',
        component:EjemploWhile1Component,
      },
      {
        path:'while/ejemplo2',
        component:EjemploWhile2Component,
      },
      {
        path:'while/ejemplo3',
        component:EjemploWhile3Component,
      },
    ]
  },
]
