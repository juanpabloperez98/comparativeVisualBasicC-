import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-multiples',
  templateUrl: './multiples.component.html',
  styleUrls: ['./multiples.component.scss']
})
export class MultiplesComponent implements OnInit {

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
  CODECSHARP2 = ` namespace Sintaxis
  {
      class Program
      {
          static void Main(string[] args)
          {
              switch( mi_expresion ){
                  case mi_expresion_1:
                      Bloque de código
                      break;
                  case mi_expresion_2:
                      Bloque de código
                      break;
                  case mi_expresion_3:
                      Bloque de código
                      break;
                  ...
                  default:
                      Bloque de código cuando no hay coincidencias
              }
          }
      }
  }
  `
  CODECVB2 = ` Module Program
  Sub Main()
      Select Case mi_expresion
          Case mi_expresion_1
              Bloque de código
          Case mi_expresion_2
              Bloque de código
          Case mi_expresion_3
              Bloque de código
          ...
          Case Else
              Bloque de código cuando no hay coincidencias
      End Select
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
              Switch(Nombre){
                  case 'Enrique':
                      color_fondo = 'Yellow';
                      break;
                  case 'Juan':
                      color_fondo = 'Blue';
                      break;
                  default:
                      color_fondo = 'White'
                      break;
              }
          }
      }
  }
  `
  CODECVB3 = ` Sub program()
  Select Case Nombre
      Case "Enrique"
          color_fondo = 'Yellow'
      Case "Juan"
          color_fondo = 'Blue'
      Case Else
          color_fondo = 'White'
  End Select
End Sub
  `

  GO_EJ1 = '/estructuras_seleccion/multiples/ejemplo1'
  GO_EJ2 = '/estructuras_seleccion/multiples/ejemplo2'
  GO_EJ3 = '/estructuras_seleccion/multiples/ejemplo3'
  GO_EJ4 = '/estructuras_seleccion/multiples/ejemplo4'

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

}
