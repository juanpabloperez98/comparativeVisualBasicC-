import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  FORIMG = `../${environment.ASSETS_ICONS_PATH}/home/repetitivas/for.png`
  WHILEIMG = `../${environment.ASSETS_ICONS_PATH}/home/repetitivas/while.png`

  PATHFOR =  '/estructuras_repetitivas/for'

  constructor() { }

  ngOnInit(): void {
  }

}
