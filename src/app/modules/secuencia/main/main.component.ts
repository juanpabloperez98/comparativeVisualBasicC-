import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  TIPODATOSIMG = `../${environment.ASSETS_ICONS_PATH}/home/secuencia/tiposdatos.png`
  EXPRESIONES = `../${environment.ASSETS_ICONS_PATH}/home/secuencia/operadores.png`

  PATH_TIPOS = '/estructuras_secuencia/tipos-datos'

  constructor() { }

  ngOnInit(): void {
  }

}
