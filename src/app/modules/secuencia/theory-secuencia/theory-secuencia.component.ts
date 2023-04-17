import { Component, OnInit, ViewChild } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-theory-secuencia',
  templateUrl: './theory-secuencia.component.html',
  styleUrls: ['./theory-secuencia.component.scss']
})
export class TheorySecuenciaComponent implements OnInit {

  TIPODATOSIMG = `../${environment.ASSETS_ICONS_PATH}/home/secuencia/tiposdatos.png`
  GO_EJ1 = '/estructuras_secuencia/tipos-datos/ejemplo1'
  GO_EJ2 = '/estructuras_secuencia/tipos-datos/ejemplo2'

  // ejemplo 1
  CODECSHARP1 = ` namespace Variables_Constantes
  {
      class Program
      {
          static void Main(string[] args)
          {
              int a = 10; //Esto es una variable
              const int c = 69; //Esto es una constante
              Console.WriteLine(a,c)
          }
      }
  }
  `
  CODECVB1 = ` Module Program
  Sub Main()
      Dim a As Integer
      Const c As Integer
      a = 10 //Esto es una variable
      c = 69 //Esto
      MsgBox a
      MsgBox c
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

  @ViewChild('contenCode1') contenCode1: any;
  buttonexample1 = true;
  buttonexample2 = true;

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  activateCode(status:number){
    switch(status){
      case 1:
        this.buttonexample1 = !this.buttonexample1;
        break;
      case 2:
        this.buttonexample2 = !this.buttonexample2;
        break
    }
  }

}
