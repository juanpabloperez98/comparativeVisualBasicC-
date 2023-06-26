import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-while',
  templateUrl: './while.component.html',
  styleUrls: ['./while.component.scss']
})
export class WhileComponent implements OnInit {

  WHILEPATH = `../${environment.ASSETS_ICONS_PATH}/home/repetitivas/while.png`


  CODECVB1 = ` Module Program
  Dim counter As integer
  counter = 0
  While counter < 20
      Bloque de codigo
      counter = counter + 1
  Wend
End Module
  `

  CODECSHARP1 = ` namespace Sintaxis
  {
      class Program
      {
          static void Main(string[] args)
          {
              int i = 0;
              while(i < 5){
                  Bloque de codigo
                  i++;
              }
          }
      }
  }
  `

  CODECVB2 = ` Sub program()
  Dim num As Integer
  num = InputBox("Ingrese numero: ")
  While (num < 10)
      num = InputBox("Ingrese numero: ")
  Wend
  MsgBox ("El numero multiplicado x 3 es: " & (num * 3))
End Sub
  `

  CODECSHARP2 = ` namespace Sintaxis
  {
      class Program
      {
          static void Main(string[] args)
          {
              int num;
              Console(.WriteLine("Ingrese numero:");
              num = Int32.Parse(Console.ReadLine());
              while(num < 10){
                  num = Int32.Parse(Console.ReadLine());
              }
              Console.WriteLine("El numero multiplicado x 3 es: {0}",(num*3));)
          }
      }
  }
  `

  GO_EJ1 = '/estructuras_repetitivas/while/ejemplo1'
  GO_EJ2 = '/estructuras_repetitivas/while/ejemplo2'
  GO_EJ3 = '/estructuras_repetitivas/while/ejemplo3'
  GO_EJ4 = '/estructuras_repetitivas/while/ejemplo4'
  GO_EJ5 = '/estructuras_repetitivas/while/ejemplo5'

  buttonexample1 = true;


  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

  activateCode(status:number){
    switch(status){
      case 1:
        this.buttonexample1 = !this.buttonexample1;
        break;
    }
  }

}
