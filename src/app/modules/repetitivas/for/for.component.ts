import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HighlightService } from 'src/app/services/highlight.service';


@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})
export class ForComponent implements OnInit {

  FORPATH = `../${environment.ASSETS_ICONS_PATH}/home/repetitivas/for.png`

  CODECVB1 = ` Module Program
  Sub Main()
  Dim i As Integer
  For i = 0 To 10
      Bloque codigo
  Next
  End Sub
End Module
  `

  CODECSHARP1 = ` namespace Sintaxis
  {
      class Program
      {
          static void Main(string[] args)
          {
              int i;
              for (i = 0; i < 10; i++){
                  Bloque codigo
              }
          }
      }
  }
  `

  CODECVB2 = ` Module Program
    Sub Main()
    Dim i As Integer
    For i = 0 To 10
        Bloque codigo
    Next
    End Sub
  End Module
    `


    CODECSHARP2= ` namespace Sintaxis
    {
        class Program
        {
            static void Main(string[] args)
            {
                int i,num=3;
                for (i = 1; i < 10; i++){
                    Console.WriteLine(num*i);
                }
            }
        }
    }
    `

    GO_EJ1 = '/estructuras_repetitivas/for/ejemplo1'
    GO_EJ2 = '/estructuras_repetitivas/for/ejemplo2'
    GO_EJ3 = '/estructuras_repetitivas/for/ejemplo3'
    GO_EJ4 = '/estructuras_repetitivas/for/ejemplo4'
    GO_EJ5 = '/estructuras_repetitivas/for/ejemplo5'

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
