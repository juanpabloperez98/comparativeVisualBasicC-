import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';


import Swal from 'sweetalert2';
import { Direction } from '../../../utils/direction.enum';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.scss']
})
export class Ejemplo1OperadoresComponent implements OnInit {



  current_line = 1;
  max_line = 14;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';

  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.secondCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.secondCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
  ]


  CODECSHARP = ` namespace Ejemplo1{
    class Program{
        static void Main(string[] args){
            int num1,num2;
            Console.WriteLine("Escriba num1:");
            num1 =  Int32.Parse(Console.ReadLine());
            Console.WriteLine("Escriba num1:");
            num2 =  Int32.Parse(Console.ReadLine());
            Console.WriteLine("La multiplicación es: {0}",(num1*num2));
        }
    }
}
  `
  CODECVB = ` Sub Ejemplo1()
  Dim num1 As Integer
  Dim num2 As Integer
  num1 = InputBox("Ingresa numero 1: ")
  num2 = InputBox("Ingresa numero 2: ")
  MsgBox ("La multiplicación es: " & (num1 * num2))
End Sub
  `

  explain = [
    [
      "Se empieza definiendo el namespace para el código C# y se define el segmento de función en el lenguaje Visual Basic",
      "",
    ],
    [
      "Se declara la clase en en el lenguaje C#",
      "",
    ],
    [
      "Se define un metodo llamado Main que será tipo static",
      "",
    ],
    [
      "Luego se declara una variable con el nombre MSJ de tipo String, tanto para el código de C# Como el de Visual Basic",
      ""
    ],
    [
      "La variable MSJ se iguala al mensaje correspondiente, en este caso “Hola mundo, este es mi primer programa”",
      "MSJ = 'Hola mundo, este es mi primer programa'",
    ],
    [
      "Se imprime por pantalla la variable MSJ",
      "MSJ = 'Hola mundo, este es mi primer programa'",
    ],
    [
      "Se cierra el método en el código de C#",
      ""
    ],
    [
      "Se cierra la clase",
      ""
    ],
    [
      "Fin del programa",
      ""
    ],
    [
      "Fin del programa",
      ""
    ],
    [
      "Fin del programa",
      ""
    ],
    [
      "Fin del programa",
      ""
    ],
    [
      "Fin del programa",
      ""
    ],
    [
      "Fin del programa",
      ""
    ],
  ]

  text_explain = this.explain[this.current_line-1][0];
  variable_line = this.explain[this.current_line-1][1];

  constructor(
    private highlightService: HighlightService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  //************************************************************************ */
  add_top_code1 = () => {
    this.top1 += 24
    this.top_style1 = this.top1 + 'px';
  }

  add_top_code2 = () => {
    this.top2 += 24
    this.top_style2 = this.top2 + 'px';
  }

  change_line = () => {
    const state = this.lines_jump[this.current_line-1];
    switch(state){
      case Direction.firstCode:{
        this.add_top_code1()
        break;
      }
      case Direction.secondCode:{
        this.add_top_code2()
        break;
      }
      case Direction.thirdCode:{
        this.add_top_code1();
        this.add_top_code2();
      }
    }
  }
  change_explain = () => {
    this.text_explain = this.explain[this.current_line-1][0];
    this.variable_line = this.explain[this.current_line-1][1];
  }
  next = () => {
    if (this.current_line >= this.max_line) {
      return;
    }
    this.current_line += 1;
    this.change_line();
    this.change_explain()
    console.log(this.current_line);
    console.log(this.max_line);
    console.log("******************************");
    if (this.current_line >= this.max_line) {
      Swal.fire('Código finalizado');
      this.location.back();
      return;
    }
  }

}
