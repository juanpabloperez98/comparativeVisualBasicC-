import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  LISTASIMG = `../${environment.ASSETS_ICONS_PATH}/home/datos/lista.png`
  MATRICESIMG = `../${environment.ASSETS_ICONS_PATH}/home/datos/matrices.png`

  PATHLISTAS =  '/estructura_datos/listas'
  PATHMATRICES =  '/estructura_datos/matrices'

  constructor() { }

  ngOnInit(): void {
  }

}
