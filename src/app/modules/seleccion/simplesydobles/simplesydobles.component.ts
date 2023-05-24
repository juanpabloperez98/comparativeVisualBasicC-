import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-simplesydobles',
  templateUrl: './simplesydobles.component.html',
  styleUrls: ['./simplesydobles.component.scss']
})
export class SimplesydoblesComponent implements OnInit {

  SIMPLESYDOBLEIMG = `../${environment.ASSETS_ICONS_PATH}/home/seleccion/simples.png`

  CODECSHARP1 = ` namespace Identificadores
  {
      class Program
      {
          static void Main(string[] args)
          {
              tipo_dato identificador_variable;
              tipo_dato identificador_funcion(tipo_dato){ }
              tipo_dato identificador_constante = 1;
          }
      }
  }
  `
  CODECVB1 = ` Module Program
  Sub Main()
      Dim identificador_variable As tipo_dato
      Const identificador_constante As tipo_dato
  End Sub
End Module
  `

  // ejemplo 2
  CODECSHARP2 = ` namespace Identificadores
  {
      class Program
      {
          static void Main(string[] args)
          {
              tipo_dato identificador_variable;
              tipo_dato identificador_funcion(tipo_dato){ }
              tipo_dato identificador_constante = 1;
          }
      }
  }
  `
  CODECVB2 = ` Module Program
  Sub Main()
      Dim identificador_variable As tipo_dato
      Const identificador_constante As tipo_dato
  End Sub
End Module
  `

  // ejemplo 3
  CODECSHARP3 = ` namespace Sintaxis
  {
      class Program
      {
          static void Main(string[] args)
          {
              if condicion {
                  Bloque codigo
              }else{
                  Bloque codigo
              }
          }
      }
  }
  `
  CODECVB3 = ` Module Program
  Sub Main()
      If condicion Then
          Bloque codigo
      Else
          Bloque codigo
      End If
  End Sub
End Module
  `

  GO_EJ1 = '/estructuras_seleccion/simples-dobles/ejemplo1'

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

}
