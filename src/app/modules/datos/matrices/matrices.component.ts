import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.scss']
})
export class MatricesComponent implements OnInit {

  MATRICESPATH = `../${environment.ASSETS_ICONS_PATH}/home/datos/matrices.png`


  CODECVB1 = ` Module Program
  Sub Main()
      Dim matriz(valor_filas, valor_columnas) As Integer
  End Sub
End Module
  `

  CODECSHARP1 = ` namespace Sintaxis
  {
      class Program
      {
          static void Main(string[] args)
          {
              int[,] valores;
              valores = new int[4, 2] { { 1, 2 }, { 3, 4 }, { 5, 6 }, { 7, 8 } };
          }
      }
  }
  `

  CODECVB2 = ` Sub program()
  Dim matrix(3, 3) As Double {{4, 3.5, 3.5}, {3.2, 3.5, 4}, {5, 5, 3.8}}
  Dim i As Integer
  Dim j As Integer
  Dim nota_max As Integer
  nota_max = 0
  For i = 0 To 2
      Dim sum_notas As Double
      sum_notas = 0
      For j = 0 To 2
          sum_notas = sum_notas + matrix(i)(j)
      Next
      If sum_notas > nota_max Then
          nota_max = suma_notas
      End If
  Next
  MsgBox ("La nota maxima es: " & nota_max)
End Sub
    `


    CODECSHARP2= ` namespace Sintaxis
    {
        class Program
        {
            static void Main(string[] args)
            {
                double[,] matrix = new double[3,3] {{4, 3.5, 3.5}, {3.2, 3.5, 4}, {5, 5, 3.8}};
                int i,j;
                double nota_max = 0;
                for(i = 0;i < 3; i ++){
                    double suma_notas = 0;
                    for(j = 0;j < 3; j ++){
                        suma_notas += matrix[i,j];
                    }
                    if(suma_notas > nota_max){
                        nota_max = suma_notas;
                    }
                }
                Console.WriteLine("La nota maxima es: {0}",nota_max);
            }
        }
    }
    `

  GO_EJ1 = '/estructura_datos/matrices/ejemplo1'
  GO_EJ2 = '/estructura_datos/matrices/ejemplo2'
  GO_EJ3 = '/estructura_datos/matrices/ejemplo3'

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
