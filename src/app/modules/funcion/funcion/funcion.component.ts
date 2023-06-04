import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-funcion',
  templateUrl: './funcion.component.html',
  styleUrls: ['./funcion.component.scss']
})
export class FuncionComponent implements OnInit {

  FUNCIONIMG = `../${environment.ASSETS_ICONS_PATH}/home/funciones/funciones.png`


  // ejemplo 1
  CODECSHARP1 = ` <modificador de acceso> <tipo de retorno> <Nombre de la función>(
    [parámetro 1, [parámetro 2]...])
    {
        //Procesamientos
        return <valor>;
    }
  `
  CODECVB1 = ` [Modifiers] Function FunctionName [(ParameterList)] As ReturnType
  [Statements]
End Function
  `

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

}
