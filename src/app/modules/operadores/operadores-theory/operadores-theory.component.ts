import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-operadores-theory',
  templateUrl: './operadores-theory.component.html',
  styleUrls: ['./operadores-theory.component.scss']
})
export class OperadoresTheoryComponent implements OnInit {

  OPERADORESIMG = `../${environment.ASSETS_ICONS_PATH}/home/secuencia/operadores.png`

  constructor() { }

  ngOnInit(): void {
  }

}
