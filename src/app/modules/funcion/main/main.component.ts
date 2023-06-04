import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  FUNCIONPATH = `../${environment.ASSETS_ICONS_PATH}/home/funciones/funciones.png`

  PATH_FUNCION = '/funcion/funciones'

  constructor() { }

  ngOnInit(): void {
  }

}
