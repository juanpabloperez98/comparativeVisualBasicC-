import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component"

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'estructuras_secuencia',
    children:[
      {
        path:'',
        loadChildren: () => import('./modules/secuencia/secuencia.module').then( m => m.SecuenciaModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]