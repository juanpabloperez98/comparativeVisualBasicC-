import { Component, OnInit, ViewChild } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';


import Swal from 'sweetalert2';
import { Direction } from '../../utils/direction.enum';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.scss']
})
export class Ejemplo2OperadoresComponent implements OnInit {



  current_line = 1;
  max_line = 10;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;

  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
  ]


  CODECSHARP = ` namespace Ejemplo2{
    class Program{
        static void Main(string[] args){
            int num1;
            Console.WriteLine("Ingresa numero:");
            num1 =  Int32.Parse(Console.ReadLine());
            Console.WriteLine("{0}",(num1%2 == 0));
        }
    }
}
  `
  CODECVB = ` Public Sub Ejemplo2()
  Dim num1 As Integer
  num1 = InputBox("Ingresa numero: ")
  MsgBox (num1 Mod 2)
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
      "Se declara una variable llamada num1 de tipo integer",
      "",
    ],
    [
      "En el código de C# se le pide al usuario que ingrese un número",
      "",
    ],
    [
      "A la variable num1 se le iguala lo que ingrese por pantalla el usuario",
      "",
    ],
    [
      "Se imprime el resultado de la operación módulo entre num1 y 2",
      "",
    ],
    [
      "Se cierra el método en el código de C# y se finaliza el código en visual basic",
      "",
    ],
    [
      "Se cierra la clase",
      "",
    ],
    [
      "Fin del programa",
      "",
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

  showInput = () => {
    if(this.current_line == 6){
      this.inputShow = true;
    }else{
      this.inputShow = false;
    }
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
    this.change_explain();
    this.showInput();
    console.log(this.current_line);
    if (this.current_line >= this.max_line) {
      Swal.fire('Código finalizado');
      this.location.back();
      return;
    }
  }

}
