import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-for5',
  templateUrl: './ejemplo-for5.component.html',
  styleUrls: ['./ejemplo-for5.component.scss']
})
export class EjemploFor5Component implements OnInit {

  current_line = 1;
  max_line = 17;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  suma:number = 0;
  n:number = 0;
  i:number = 1;


  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
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

  CODECVB = ` Sub Ejemplo5()
  Dim n,i As Integer
  Dim suma As Double
  n = InputBox("Ingresa el numero n de la sucesion: ")
  suma = 0
  For i = 1 To n
      MsgBox ("2^" & (i) & "=" & (2 ^ i))
      suma = suma + (2 ^ i)
  Next
  MsgBox ("La suma total es: " & (suma))
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
      "Se define las variable n,i de tipo int",
      "",
    ],
    [
      "Se define la variable suma de tipo double en los dos códigos",
      "",
    ],
    [
      "Se le pide al usuario que ingrese el número de la sucesión",
      "",
    ],
    [
      "Se iguala la variable n a lo ingresado por el usuario",
      "",
    ],
    [
      "Se iguala la variable suma a cero",
      "",
    ],
    [
      "Se utiliza la sentencia for para recorrer desde i = 1 hasta el valor de n",
      "",
    ],
    [
      "Se imprime la operación exponente de 2^i",
      "",
    ],
    [
      "Ahora la variable suma se actualiza al valor de suma más 2^i",
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
      "Se imprime la suma total",
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
    if(this.current_line == 9){
      this.variable_line = `i = ${this.i} - n = ${this.n}`
      return
    }
    if(this.current_line == 10){
      this.variable_line = `i = ${this.i} - 2^i=${Math.pow(2,this.i)}`
      return
    }
    if(this.current_line == 11){
      this.variable_line = `i = ${this.i} - suma = ${this.suma}`
      this.suma = (this.suma + Math.pow(2,this.i));
      console.log("this.suma",this.suma);
      return
    }
    if(this.current_line == 14){
      this.variable_line = `La suma total es: ${this.suma}`
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
    if(this.current_line == 7){
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
        this.n = parseInt(this.valueField);
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
        if(this.current_line == 11 || this.current_line == 13 || this.current_line == 15){
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
    for (let p = 0; p < 3; p++) {
      this.less_top_code1()
      this.less_top_code2()
    }
    this.add_variable()
  }


  jump = () => {
    switch(this.current_line){
      case 10:{
        if(this.i > this.n){
          for (let p = 0; p < 3; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 13:{
        if(this.i < this.n+1){
          for (let p = 0; p < 4; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.i++;
          this.back_code_for();
        }
        break;
      }
      /* case 9:{
        if(this.numero > 3){
          for (let p = 0; p < 11; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 10:{
        if(this.i >= this.numero){
          for (let p = 0; p < 9; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 19:{
        if(this.i < this.numero){
          for (let p = 0; p < 10; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.i++;
          this.back_code_for();
        }
        break;
      }
      case 20:{
          for (let p = 0; p < 2; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        break;
      } */
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

