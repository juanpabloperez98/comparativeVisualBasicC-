import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  modules = [
    {
      'name':'Estructuras de secuencia',
      'context':'Este módulo busca enseñar sobre las declaraciones de variables, los tipos de datos que hay, como también las expresiones aritméticas y lógicas que maneja cada lenguaje.',
      'img':'../../assets/home/secuencia.png',
      'routerlink':'/estructuras_secuencia/intro'
    },
    {
      'name':'Estructuras de selección',
      'context':'Amplia tus conocimientos sobre condicionales y lógica booleana, también acerca del if simple y el if anidado, y no te quedes sin saber sobre condicionales de múltiple selección, como el switch.',
      'img':'../../assets/home/seleccion.png',
      'routerlink':'/estructuras_seleccion/intro'
    },
    {
      'name':'Estructuras repetitivas',
      'context':'Aprende sobre las estructuras repetitivas las cuales permiten optimizar procesos y tareas de una manera recursiva y más rápida. Conocerás acerca de su sintaxis, funcionamiento y cuando implementarlas.',
      'img':'../../assets/home/repetitivas.png',
      'routerlink':'/estructuras_repetitivas/intro'
    },
    {
      'name':'Estructura Datos',
      'context':'Lo que se busca con este módulo es mostrar la función que cumplen las estructuras de datos para organizar, almacenar y estructuras los datos que se utilizan a la hora de desarrollar un programa.',
      'img':'../../assets/home/datos.png',
      'routerlink':'/funcion/intro'
    },
    {
      'name':'Funciones',
      'context':'Aprende que es una función, y cómo implementarlas, también que es un procedimiento y cómo se podría implementar.',
      'img':'../../assets/home/funciones.png',
      'routerlink':'/funcion/intro'
    },
  ]

  logo_cv =  `../${environment.ASSETS_ICONS_PATH}home/VCB_logo.png`;

  ngOnInit(): void {
    console.log(this.logo_cv);
  }
}
