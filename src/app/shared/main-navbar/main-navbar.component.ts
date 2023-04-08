import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  PATH_ASSETS = `../${environment.ASSETS_ICONS_PATH}logos/logo_utp.png`

  constructor() { }

  ngOnInit(): void {}

}
