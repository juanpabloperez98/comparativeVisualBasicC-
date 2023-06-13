/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-multiples4',
  templateUrl: './ejemplo-multiples4.component.html',
  styleUrls: ['./ejemplo-multiples4.component.scss']
})
export class EjemploMultiples4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */

import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-multiples4',
  templateUrl: './ejemplo-multiples4.component.html',
  styleUrls: ['./ejemplo-multiples4.component.scss']
})
export class EjemploMultiples4Component implements OnInit {

  current_line = 1;
  max_line = 30;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  op:number = 0;
  valor:number = 0;
  pulgadas:number = 0;
  kilogramos:number = 0;


  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.secondCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.secondCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
  ]

  CODECVB = ` Sub Ejemplo4()
  Dim op, valor As Integer
  MsgBox ("1Convertir de centímetros a pulgadas 2)Convertir de líbra a kilogramos")
  op = InputBox("Ingresa la opción: ")
  valor = InputBox("Ingresa valor: ")
  Select Case op
    Case 1
          Dim pulgadas As Double
          pulgadas = valor / 2.54
          MsgBox ("Centimetros: " & valor & " pulgadas: " & pulgadas)
    Case 2
          Dim kilogramos As Double
          kilogramos = valor * (1 / 2.21)
          MsgBox ("Centimetros: " & valor & " pulgadas: " & pulgadas)
    Case Default
          MsgBox ("Opción no valida")
  End Select
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
      "Se definen la variables op y valor de tipo entero, en los dos códigos",
      "",
    ],
    [
      "Despues de imprime en pantalla las opciones que puede escoger el usuario",
      "",
    ],
    [
      "Se pide al usuario que ingrese la opción, en el código de C#",
      "",
    ],
    [
      "Se captura el valor ingresado por el usuario en la variable op",
      "",
    ],
    [
      "Se pide al usuario que el valor a convertir, en el código de C#",
      "",
    ],
    [
      "Se captura el valor ingresado por el usuario y se almacena en la variable valor",
      "",
    ],
    [
      "Luego se utiliza la sentencia switch pasando como valor de comparación la variable op",
      "",
    ],
    [
      "Como la variable op es igual a 1 entonces entra en el case 1",
      "",
    ],
    [
      "Se define la variable pulgadas de tipo double en el código de visual basic",
      "",
    ],
    [
      "Luego se iguala la variable pulgadas, a la operación de la variable valor dividida entre 2.54",
      "",
    ],
    [
      "Se imprime la variables valor y pulgadas",
      "",
    ],
    [
      "Se sale del switch con el break",
      "",
    ],
    [
      "Se cierra el case",
      "",
    ],
    [
      "Como la variable op es igual a 2 entonces entra en el case 2",
      "",
    ],
    [
      "Se define la variable kilogramos de tipo double en el código de visual basic",
      "",
    ],
    [
      "Luego se iguala la variable kilogramos, a la operación de la variable valor multiplicada entre (1/2,21), esto para poder convertir a kilogramos el valor de libras",
      "",
    ],
    [
      "Se imprime la variables valor y kilogramos",
      "",
    ],
    [
      "Se sale del switch con el break",
      "",
    ],
    [
      "Se cierra el case",
      "",
    ],
    [
      "Como la variable op no es igual a ningun caso entonces entra al default",
      "",
    ],
    [
      "Se imprime que la opción es no valida",
      "",
    ],
    [
      "Se sale del switch con el break",
      "",
    ],
    [
      "Se cierra el case",
      "",
    ],
    [
      "Se cierra el switch",
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
    if(this.current_line == 10){
      this.variable_line = `op = ${this.op}`
      return
    }
    if(this.current_line == 13 || this.current_line == 14){
      this.pulgadas = this.valor/2.54;
      this.variable_line = `valor = ${this.valor} - pulgadas = ${this.pulgadas.toFixed(2)}`
      return
    }
    if(this.current_line == 19 || this.current_line == 20){
      this.kilogramos = this.valor * (1/2.21);
      this.variable_line = `valor = ${this.valor} - kilogramos = ${this.kilogramos.toFixed(2)}`
      return
    }
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
        if(this.valueField != "" && Number.isNaN(parseInt(this.valueField))){
          Swal.fire('Ingrese un numero valido','Debe ingresar un numero valido para continuar','error');
          this.back_code();
        }
        this.op = parseInt(this.valueField);
        this.valueField = "";
        break;
      }
      case 10:{
        if(this.valueField == ""){
          Swal.fire('Ingrese un valor','Debe ingresar un valor para continuar','error');
          this.back_code();
        }
        if(this.valueField != "" && Number.isNaN(parseInt(this.valueField))){
          Swal.fire('Ingrese un numero valido','Debe ingresar un numero valido para continuar','error');
          this.back_code();
        }
        this.valor = parseInt(this.valueField);
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

  jump = () => {
    switch(this.current_line){
      case 11:{
        if(this.op == 1){

        }else if(this.op == 2){
          for (let i = 0; i < 6; i++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }else{
          for (let i = 0; i < 12; i++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 17:{
        for (let i = 0; i < 10; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 23:{
          for (let i = 0; i < 4; i++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
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
