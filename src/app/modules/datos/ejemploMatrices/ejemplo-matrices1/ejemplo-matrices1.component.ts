import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-matrices1',
  templateUrl: './ejemplo-matrices1.component.html',
  styleUrls: ['./ejemplo-matrices1.component.scss']
})
export class EjemploMatrices1Component implements OnInit {

  current_line = 1;
  max_line = 21;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  n:number = 0;
  i:number = 0;
  j:number = 0;
  matrix: number[][] = [];
  aux_max: number[] = [];

  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
  ]

  CODECVB = ` Sub Ejemplo1()
  Dim n,i,j As Integer
  n = InputBox("Ingrese la lognitud de la matriz: ")
  Dim matrix(100, 100) As Integer
  For i = 0 To n - 1
      For j = 0 To n - 1
          matrix(i, j) = InputBox("Ingrese el valor en la posicion" & i & " - " & j)
      Next
  Next
  For i = 0 To n - 1
      For j = 0 To n - 1
          MsgBox ("Valor en la posicion " & i & " - " & j & " : " & matrix(i, j))
      Next
  Next
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
      "Se define las variables n,i,j de tipo entero",
      "",
    ],
    [
      "Se le pide al usuario que ingrese la longitud de la matriz",
      "",
    ],
    [
      "Se iguala la variable n a lo que ingrese el usuario por pantalla",
      "",
    ],
    [
      "Se define la variable matrix, esta sera un arreglo bidimensional. Notese que en el código de C# se define el tamaño de la matriz basado en el valor de la variable n, y el código de VB se le da el tamaño de la matriz de 100x100 (ambas matrices van almacenar números enteros)",
      "",
    ],
    [
      "Se utiliza la sentencia for para recorrer desde i = 0 hasta el valor de la variable n (Para recorrer las filas)",
      "",
    ],
    [
      "Se utiliza la sentencia for para recorrer desde j = 0 hasta el valor de la variable n (Para recorrer las columnas)",
      "",
    ],
    [
      "Se le pide al usuario que ingrese un valor que sera almacenado en la posición i,j de la matriz matrix",
      "",
    ],
    [
      "Se captura lo ingresado por el usuario y se almacena en la variable matrix, en la posición i,j de la matriz",
      "",
    ],
    [
      "Se cierra el ciclo for de j",
      "",
    ],
    [
      "Se cierra el ciclo for de i",
      "",
    ],
    [
      "Se utiliza la sentencia for para recorrer desde i = 0 hasta el valor de la variable n (Para recorrer las filas)",
      "",
    ],
    [
      "Se utiliza la sentencia for para recorrer desde j = 0 hasta el valor de la variable n (Para recorrer las columnas)",
      "",
    ],
    [
      "Se imprime el valor que se encuentra almacenado en la variable matrix en la posición i,j",
      "",
    ],
    [
      "Se cierra el ciclo for de j",
      "",
    ],
    [
      "Se cierra el ciclo for de i",
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
      this.variable_line = `i = ${this.i} - n = ${this.n}`
      return
    }
    if(this.current_line == 9){
      this.variable_line = `j = ${this.j} - n = ${this.n}`
      return
    }
    if(this.current_line == 10){
      this.variable_line = `i = ${this.i} - j = ${this.j}`
      return
    }
    if(this.current_line == 11){
      this.variable_line = `i = ${this.i} - j = ${this.j}`
      return
    }
    if(this.current_line == 14){
      this.variable_line = `i = ${this.i} - n = ${this.n}`
      return
    }
    if(this.current_line == 15){
      this.variable_line = `j = ${this.j} - n = ${this.n}`
      return
    }
    if(this.current_line == 16){
      this.variable_line = `Valor en la posicion ${this.i} ${this.j} : ${this.matrix[this.i][this.j]}`
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
    if(this.current_line == 6 || this.current_line == 11){
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
      case 7:{
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
      case 12:{
        if(this.valueField == ""){
          Swal.fire('Ingrese un valor','Debe ingresar un valor para continuar','error');
          this.back_code();
        }
        if(this.valueField != "" && Number.isNaN(parseInt(this.valueField))){
          Swal.fire('Ingrese un numero valido','Debe ingresar un numero valido para continuar','error');
          this.back_code();
        }
        this.aux_max.push(parseInt(this.valueField));
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
        this.less_top_code1();
        this.less_top_code2();
      }
    }
    this.change_explain();
    this.showInput();
  }

  back_code_for = (id:number) => {
    if(id == 1){
      for (let p = 0; p < 3; p++) {
        this.less_top_code1()
      }
      for (let p = 0; p < 2; p++) {
        this.less_top_code2()
      }
    }
    if(id == 2){
      for (let p = 0; p < 5; p++) {
        this.less_top_code1()
      }
      for (let p = 0; p < 4; p++) {
        this.less_top_code2()
      }
    }
    if(id == 3){
      for (let p = 0; p < 2; p++) {
        this.less_top_code1()
        this.less_top_code2()
      }
    }
    if(id == 4){
      for (let p = 0; p < 4; p++) {
        this.less_top_code1()
        this.less_top_code2()
      }
    }

    this.add_variable()
  }


  jump = () => {
    switch(this.current_line){
      case 9:{
        if(this.i >= this.n){
          for (let p = 0; p < 4; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
          this.i = 0;
          this.j = 0;
        }
        break;
      }
      case 10:{
        if(this.j >= this.n){
          for (let p = 0; p < 2; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
          this.matrix.push(this.aux_max);
          this.aux_max = [];
        }
        break;
      }
      case 12:{
        if(this.j < this.n){
          for (let p = 0; p < 3; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.j++;
          this.back_code_for(1);
        }
        break;
      }
      case 13:{
        if(this.i < this.n){
          for (let p = 0; p < 5; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.i++;
          this.j = 0;
          this.back_code_for(2);
        }
        break;
      }
      case 15:{
        if(this.i >= this.n){
          for (let p = 0; p < 3; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
          this.i = 0;
          this.j = 0;
        }
        break;
      }
      case 16:{
        if(this.j >= this.n){
          for (let p = 0; p < 1; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 17:{
        if(this.j < this.n){
          for (let p = 0; p < 2; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.j++;
          this.back_code_for(3);
        }
        break;
      }
      case 18:{
        if(this.i < this.n){
          for (let p = 0; p < 4; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.i++;
          this.j = 0;
          this.back_code_for(4);
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
