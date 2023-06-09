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
    path: 'estructuras_seleccion',
    children:[
      {
        path:'',
        loadChildren: () => import('./modules/seleccion/seleccion.module').then( m => m.SeleccionModule)
      }
    ]
  },
  {
    path: 'estructuras_repetitivas',
    children:[
      {
        path:'',
        loadChildren: () => import('./modules/repetitivas/repetitivas.module').then( m => m.RepetitivasModule)
      }
    ]
  },
  {
    path: 'estructura_datos',
    children:[
      {
        path:'',
        loadChildren: () => import('./modules/datos/datos.module').then( m => m.DatosModule)
      }
    ]
  },
  {
    path: 'funcion',
    children:[
      {
        path:'',
        loadChildren: () => import('./modules/funcion/funcion.module').then( m => m.FuncionModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]
