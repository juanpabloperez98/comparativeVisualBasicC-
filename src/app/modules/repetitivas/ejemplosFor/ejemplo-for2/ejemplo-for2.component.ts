import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-for2',
  templateUrl: './ejemplo-for2.component.html',
  styleUrls: ['./ejemplo-for2.component.scss']
})
export class EjemploFor2Component implements OnInit {

  current_line = 1;
  max_line = 18;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  num1:number = 0;
  num2:number = 0;
  i:number = 0;
  resultado:number = 0;


  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.secondCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.secondCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
  ]

  CODECVB = ` Sub Ejemplo2()
  Dim num1,num2,i As Integer
  Dim resultado As Integer
  resultado = 0
  num1 = InputBox("Ingrese el primer operador: ")
  num2 = InputBox("Ingrese el primer operador: ")
  For i = 1 To num2
    resultado = resultado + num1
  Next
  MsgBox ("El resultado de la multipliación es:" & resultado)
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
      "Se define las variable num1, num2, i de tipo int",
      "",
    ],
    [
      "Se define la variable resultado en el código de VB",
      "",
    ],
    [
      "Se iguala la variable resultado a cero",
      "",
    ],
    [
      "Se le pide al usuario que ingrese el primer operador",
      "",
    ],
    [
      "Se captura el valor ingresado por el usuario en la variable num1",
      "",
    ],
    [
      "Se le pide al usuario que ingrese el segundo operador",
      "",
    ],
    [
      "Se captura el valor ingresado por el usuario en la variable num2",
      "",
    ],
    [
      "Se utiliza la sentencia for para recorrer desde i = 0 hasta el valor de num2",
      "",
    ],
    [
      "La variable resultado se actualiza a la suma de el valor de la misma sumandole el valor de la variable num1",
      "",
    ],
    [
      "Se utiliza la plabara reservada Next para seguir iterando",
      "",
    ],
    [
      "Se cierra el ciclo for",
      "",
    ],
    [
      "Se imprime el resultado de la multiplicación imprimiendo la variable resultado",
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
    if(this.current_line == 11){
      this.variable_line = `i = ${this.i} - num2 = ${this.num2}`
      return
    }
    if(this.current_line == 12){
      this.variable_line = `resultado = ${this.resultado} - num1 = ${this.num1}`
      if(this.i < this.num2){
        this.resultado += this.num1;
      }
      return
    }
    if(this.current_line == 15){
      this.variable_line = `El resultado de la multipliación es: ${this.resultado}`
      this.resultado += this.num1;
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
    if(this.current_line == 8 || this.current_line == 10){
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
      case 9:{
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
      case 11:{
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
        if(this.current_line == 8){
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

  back_code_for = () => {
    for (let p = 0; p < 2; p++) {
      this.less_top_code1()
      this.less_top_code2()
    }
    this.add_variable()
  }


  jump = () => {
    switch(this.current_line){
      /* case 6:{
        if(this.i > 12){
          for (let p = 0; p < 3; p++) {
            this.current_line += 1;
            this.change_line();
          }
        }
        break;
      }
      case 7:{
        if(this.i%2 != 0){
          this.current_line += 1;
          this.change_line();
        }
        break;
      } */
      case 12:{
        if(this.i >= this.num2){
          for (let p = 0; p < 2; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 14:{
        if(this.i < this.num2){
          for (let p = 0; p < 3; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.i++;
          this.back_code_for();
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
    this.showInput()
    this.validate_next()
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



