import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-for4',
  templateUrl: './ejemplo-for4.component.html',
  styleUrls: ['./ejemplo-for4.component.scss']
})
export class EjemploFor4Component implements OnInit {

  current_line = 1;
  max_line = 25;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  numero:number = 0;
  n1:number = 0;
  n2:number = 0;
  n3:number = 0;
  promedio:number = 0;
  i:number = 0;


  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.secondCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
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
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
  ]

  CODECVB = ` Sub Ejemplo4()
  Dim numero,n1,n2,n3,promedio As Integer
  Dim i As Integer
  numero = InputBox("Ingrese el numero de estudiantes:")
  If numero <= 3 Then
      For i = 1 To numero
          n1 = InputBox("Nota 1:")
          n2 = InputBox("Nota 2:")
          n3 = InputBox("Nota 3:")
          promedio = (n1 + n2 + n3) / 3
          MsgBox ("El promedio del alumno " & i & " es: " & promedio)
      Next
  Else
      MsgBox ("Numero de estudiantes mayor a 3")
  End If
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
      "Se define las variable numero,n1,n2,n3,promedio de tipo int",
      "",
    ],
    [
      "Se define la variable i de tipo int en el código de VB",
      "",
    ],
    [
      "Se le pide al usuario que ingrese el número de estudiantes",
      "",
    ],
    [
      "Se captura lo ingresado por el usuario en la variable numero",
      "",
    ],
    [
      "Se valida si numero es menor o igual a 3",
      "",
    ],
    [
      "Se utiliza la sentencia for para recorrer desde i = 0 hasta el valor de numero",
      "",
    ],
    [
      "Se imprime Nota 1",
      "",
    ],
    [
      "Se captura lo ingresado por el usuario en la variable n1",
      "",
    ],
    [
      "Se imprime Nota 2",
      "",
    ],
    [
      "Se captura lo ingresado por el usuario en la variable n2",
      "",
    ],
    [
      "Se imprime Nota 3",
      "",
    ],
    [
      "Se captura lo ingresado por el usuario en la variable n3",
      "",
    ],
    [
      "Se iguala la variable promedio a la operación de la suma de las variable n1, n2, n3 divido entre 3",
      "",
    ],
    [
      "Se imprime el promedio del alumno",
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
      "Como la condición no se cumple entonces",
      "",
    ],
    [
      "Se imprime que los numero de estudiantes mayor a 3",
      "",
    ],
    [
      "Se cierra el if",
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
    if(this.current_line == 8){
      this.variable_line = `numero = ${this.numero}`
      return
    }
    if(this.current_line == 9){
      this.variable_line = `i = ${this.i} - numero = ${this.numero}`
      return
    }
    if(this.current_line == 10){
      this.variable_line = `Nota 1`
      return
    }
    if(this.current_line == 12){
      this.variable_line = `Nota 2`
      return
    }
    if(this.current_line == 14){
      this.variable_line = `Nota 3`
      return
    }
    if(this.current_line == 16){
      this.variable_line = `n1 = ${this.n1} - n2 = ${this.n2} - n3 = ${this.n3}`
      this.promedio = (this.n1 + this.n2 + this.n3) / 3;
      return
    }
    if(this.current_line == 17){
      this.variable_line = `El promedio del alumno ${this.i} es ${this.promedio.toFixed(2)}`
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
    if(this.current_line == 7 || this.current_line == 11 || this.current_line == 13 || this.current_line == 15){
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
        this.numero = parseInt(this.valueField);
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
        this.n1 = parseInt(this.valueField);
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
        this.n2 = parseInt(this.valueField);
        this.valueField = "";
        break;
      }
      case 16:{
        if(this.valueField == ""){
          Swal.fire('Ingrese un valor','Debe ingresar un valor para continuar','error');
          this.back_code();
        }
        if(this.valueField != "" && Number.isNaN(parseInt(this.valueField))){
          Swal.fire('Ingrese un numero valido','Debe ingresar un numero valido para continuar','error');
          this.back_code();
        }
        this.n3 = parseInt(this.valueField);
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
    for (let p = 0; p < 9; p++) {
      this.less_top_code1()
    }
    for (let p = 0; p < 6; p++) {
      this.less_top_code2()
    }
    this.add_variable()
  }


  jump = () => {
    switch(this.current_line){
      case 9:{
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
