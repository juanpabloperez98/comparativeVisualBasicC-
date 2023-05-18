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
  valueField = "";
  inputShow = false;

  // Variables del programa
  num1 = "";
  num2 = "";

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
      "Se define dos variables de tipo int num1 y num2 en el código de C#, en el código de visual basic solo de define la variable num1",
      ""
    ],
    [
      "Se declara la variable num2 en el código de visual basic",
      ""
    ],
    [
      "Se le pide al usuario que ingrese num1",
      ""
    ],
    [
      "Se captura lo ingresado en pantalla por el usuario y se iguala a la variable num1",
      ""
    ],
    [
      "Se le pide al usuario que ingrese num2",
      ""
    ],
    [
      "Se captura lo ingresado en pantalla por el usuario y se iguala a la variable num2",
      ""
    ],
    [
      "Por ultimo se imprime la multiplicación entre los dos números ingresados por el usuario anteriormente",
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

  add_variable = () => {
    if(this.current_line == 10){
      this.variable_line = `num1 = ${this.num1}, num2 = ${this.num2}`;
      return
    }
    this.variable_line = "";
  }

  less_top_code1 = () => {
    this.top1 -= 24
    this.top_style1 = this.top1 + 'px';
  }

  less_top_code2 = () => {
    this.top2 -= 24
    this.top_style2 = this.top2 + 'px';
  }

  showInput = () => {
    if(this.current_line == 7 || this.current_line == 9){
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

  validate_next = () => {
    switch(this.current_line){
      case 8:{
        if(this.valueField == ""){
          Swal.fire('Ingrese un valor','Debe ingresar un valor para continuar','error');
          this.back_code();
        }
        this.num1 = this.valueField;
        this.valueField = "";
        break;
      }
      case 10:{
        if(this.valueField == ""){
          Swal.fire('Ingrese un valor','Debe ingresar un valor para continuar','error');
          this.back_code();
        }
        this.num2 = this.valueField;
        this.valueField = "";
        break;
      }
    }
  }

  back_code = () => {
    this.current_line --;
    const state = this.lines_jump[this.current_line-1];
    console.log("state",state);
    switch(state){
      case Direction.firstCode:{
        this.less_top_code1()
        break;
      }
      case Direction.secondCode:{
        this.less_top_code2()
        break;
      }
      case Direction.thirdCode:{
        if(this.current_line == 7){
          this.less_top_code1();
        }else{
          this.less_top_code1();
          this.less_top_code2();
        }
      }
    }
    this.change_explain();
    this.showInput();
  }

  next = () => {
    if (this.current_line >= this.max_line) {
      return;
    }
    this.current_line += 1;
    this.change_line();
    this.change_explain();
    this.showInput();
    this.validate_next();
    this.add_variable();
    console.log(this.current_line);
    if (this.current_line >= this.max_line) {
      Swal.fire('Código finalizado');
      this.location.back();
      return;
    }
  }

}
