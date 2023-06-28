import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {

  LISTASPATH = `../${environment.ASSETS_ICONS_PATH}/home/datos/lista.png`


  CODECVB1 = ` Module Program
  Sub Main()
      Dim nombres() As String
      Dim nombres(10) As String
  End Sub
End Module
  `

  CODECSHARP1 = ` namespace Sintaxis
  {
      class Program
      {
          static void Main(string[] args)
          {
              int[] valores;
              valores = new int[10];
          }
      }
  }
  `

  CODECVB2 = ` Sub program()
  Dim i As Integer
  Dim valores(20) As Integer
  For i = 0 To 19
      valores(i) = InputBox("Ingrese un valor")
  Next
  Dim suma As Integer
  suma = 0
  For i = 0 To 19
      suma = suma + valores(i)
  Next
  MsgBox ("La suma del arreglo es: " & suma)
End Sub
    `


    CODECSHARP2= ` namespace Sintaxis
    {
        class Program
        {
            static void Main(string[] args)
            {
                int[] valores;
                valores = new int[20];
                for(int i = 0; i <= 19; i++){
                    Console.WriteLine("Ingrese valor");
                    int valor = Int32.Parse(Console.ReadLine());
                    valores[i] = valor;
                }
                int suma  = 0;
                for(int i = 0; i <= 19; i++){
                    suma += valores[i];
                }
                Console.WriteLine("La suma del arreglo es: {0}",suma);
            }
        }
    }
    `

  GO_EJ1 = '/estructura_datos/listas/ejemplo1'
  GO_EJ2 = '/estructura_datos/listas/ejemplo2'
  GO_EJ3 = '/estructura_datos/listas/ejemplo3'

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
