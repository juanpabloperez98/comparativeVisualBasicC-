import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  SIMPLESIMG = `../${environment.ASSETS_ICONS_PATH}/home/seleccion/simples.png`
  MULTIPLES = `../${environment.ASSETS_ICONS_PATH}/home/seleccion/multiples_index.png`

  PATH_SIMPLESDOBLES = '/estructuras_seleccion/simples-dobles'
  PATH_MULTIPLES = '/estructuras_seleccion/multiples'

  constructor() { }

  ngOnInit(): void {
  }

}
