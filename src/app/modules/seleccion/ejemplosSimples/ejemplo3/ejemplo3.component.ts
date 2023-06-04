import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.scss']
})
export class Ejemplo3Component implements OnInit {

  current_line = 1;
  max_line = 24;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  num1:number = 0;
  num2:number = 0;
  num3:number = 0;
  num_mayor: number = 0;

  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.secondCode,
    Direction.secondCode,
    Direction.secondCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
  ]

  CODECVB = ` Sub Ejemplo3()
  Dim num1 As Integer
  Dim num2 As Integer
  Dim num3 As Integer
  Dim num_mayor As Integer
  num1 = InputBox("Ingrese numero 1: ")
  num2 = InputBox("Ingrese numero 2: ")
  num3 = InputBox("Ingrese numero 3: ")
  num_mayor = num1
  If num_mayor < num2 Then num_mayor = num2
  If num_mayor < num3 Then num_mayor = num3
  MsgBox ("El numero mayor es " & num_mayor)
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
      "Se definen 4 variables en el código de C# y se define la variable num1 como entero en el código de visual basic",
      "",
    ],
    [
      "Se define la variable num2 en el código de visual basic",
      "",
    ],
    [
      "Se define la variable num3 en el código de visual basic",
      "",
    ],
    [
      "Se define la variable num_mayor de tipo entero en el código de visual basic",
      "",
    ],
    [
      "Se le pide al usuario que ingrese el valor de num1 en el código de C#",
      "",
    ],
    [
      "Luego se captura el valor ingresado por el usuario en la variable num1",
      "",
    ],
    [
      "Se le pide al usuario que ingrese el valor de num2 en el código de C#",
      "",
    ],
    [
      "Luego se captura el valor ingresado por el usuario en la variable num2",
      "",
    ],
    [
      "Se le pide al usuario que ingrese el valor de num3 en el código de C#",
      "",
    ],
    [
      "Luego se captura el valor ingresado por el usuario en la variable num3",
      "",
    ],
    [
      "Se iguala la variable num_mayor al valor de la variable num1",
      "",
    ],
    [
      "Se valida si num_mayor es menor que num2, de ser así entonces num_mayor cambia de valor a num2",
      "",
    ],
    [
      "Como la condición se cumplio entonces num_mayor ahora es igual a num2",
      "",
    ],
    [
      "Se cierra el condicional if",
      "",
    ],
    [
      "Se valida si num_mayor es menor a num3, de ser la condición correcta entonces num_mayor cambia de valor a num3",
      "",
    ],
    [
      "Como la condición se cumplió entonces num_mayor ahora es igual a num3",
      "",
    ],
    [
      "Se cierra el condicional if",
      "",
    ],
    [
      "Se imprime cual es el número mayor imprimiendo la variable num_mayor",
      "",
    ],
    [
      "Fin del programa",
      "",
    ],
    [
      "Fin del programa",
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

  add_variable = () => {
    if(this.current_line == 14){
      this.variable_line = `num1 = ${this.num1} - num_mayor = ${this.num_mayor}`
      this.num_mayor = this.num1;
      return
    }
    if(this.current_line ==  15){
      this.variable_line = `num_mayor = ${this.num_mayor} - num2 = ${this.num2}`
      return
    }
    if(this.current_line ==  18){
      this.variable_line = `num_mayor = ${this.num_mayor} - num3 = ${this.num3}`
      return
    }
    if(this.current_line ==  21){
      this.variable_line = `El numero mayor es: ${this.num_mayor}`
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
    if(this.current_line == 9 || this.current_line == 11 || this.current_line == 13){
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
      case 10:{
        if(this.valueField == ""){
          Swal.fire('Ingrese un valor','Debe ingresar un valor para continuar','error');
          this.back_code();
        }
        if(this.valueField != "" && Number.isNaN(parseInt(this.valueField))){
          Swal.fire('Ingrese un numero valido','Debe ingresar un numero valido para continuar','error');
          this.back_code();
        }
        this.num1 = parseInt(this.valueField);
        this.valueField = "";
        break;
      }
      case 12:{
        if(this.valueField == ""){
          Swal.fire('Ingrese un valor','Debe ingresar un valor para continuar','error');
          this.back_code();
        }
        if(this.valueField != "" && Number.isNaN(parseInt(this.valueField))){
          Swal.fire('Ingrese un numero valido','Debe ingresar un numero valido para continuar','error');
          this.back_code();
        }
        this.num2 = parseInt(this.valueField);
        this.valueField = "";
        break;
      }
      case 14:{
        if(this.valueField == ""){
          Swal.fire('Ingrese un valor','Debe ingresar un valor para continuar','error');
          this.back_code();
        }
        if(this.valueField != "" && Number.isNaN(parseInt(this.valueField))){
          Swal.fire('Ingrese un numero valido','Debe ingresar un numero valido para continuar','error');
          this.back_code();
        }
        this.num3 = parseInt(this.valueField);
        this.num_mayor = this.num1;
        this.valueField = "";
        break;
      }
    }
  }

  back_code = () => {
    this.current_line --;
    const state = this.lines_jump[this.current_line-1];
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
        if(this.current_line == 9 || this.current_line == 11){
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

  jump = () => {

    switch(this.current_line){
      case 16:{
        if(this.num_mayor < this.num2){
          console.log("entra");
          this.num_mayor = this.num2
        }else{
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 19:{
        if(this.num_mayor < this.num3){
          this.num_mayor = this.num3
        }else{
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
    }
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
    this.jump()
    console.log(this.current_line);
    if (this.current_line >= this.max_line) {
      Swal.fire('Código finalizado');
      this.location.back();
      return;
    }
  }

}
