import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';


@Component({
  selector: 'app-simplesydobles',
  templateUrl: './simplesydobles.component.html',
  styleUrls: ['./simplesydobles.component.scss']
})
export class SimplesydoblesComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
