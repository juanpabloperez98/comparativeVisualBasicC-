import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HighlightService } from 'src/app/services/highlight.service';


@Component({
  selector: 'app-operadores-theory',
  templateUrl: './operadores-theory.component.html',
  styleUrls: ['./operadores-theory.component.scss']
})
export class OperadoresTheoryComponent implements OnInit {

  OPERADORESIMG = `../${environment.ASSETS_ICONS_PATH}/home/secuencia/operadores.png`

  CODECSHARP1 = ` namespace Operadores
  {
      class Program
      {
          static void Main(string[] args)
          {
              int num1;
              num1 = 4;
              num1 *= 4;
              Console.WriteLine("Numero multiplicado: {0}",num1);
          }
      }
  }
  `
  CODECVB1 = ` Module Program
  Sub Main()
      Dim num1 As Integer = 4
      num1 *= 4
      MsgBox("Numero multiplicado: " & num1)
  End Sub
End Module
  `

  CODECSHARP2 = ` namespace Operadores
  {
      class Program
      {
          static void Main(string[] args)
          {
              int num1=4,num2=3,modulo;
              modulo = num1%num2;
              Console.WriteLine("El módulo del número es: {0}",modulo);
          }
      }
  }
  `
  CODECVB2 = ` Module Program
  Sub Main()
      Dim num1 As Integer = 4
      Dim num2 As Integer = 3
      Dim modulo As Integer
      modulo = num1 Mod num2
      MsgBox("El módulo del número es: " & modulo)
  End Sub
End Module
  `
  @ViewChild('contenCode1') contenCode1: any;

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

}
