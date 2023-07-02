import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-matrices3',
  templateUrl: './ejemplo-matrices3.component.html',
  styleUrls: ['./ejemplo-matrices3.component.scss']
})
export class EjemploMatrices3Component implements OnInit {

  current_line = 1;
  max_line = 26;
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
  matrix1: number[][] = [];
  matrix2: number[][] = [];
  matrix3: number[][] = [];
  aux_matrix1: number [] = [];
  aux_matrix2: number [] = [];
  aux_matrix3: number [] = [];

  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
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
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,

  ]

  CODECVB = ` Sub Ejemplo3()
  Dim matrix1(100, 100) As Integer
  Dim matrix2(100, 100) As Integer
  Dim matrix3(100, 100) As Integer
  Dim i,j,n As Integer
  n = InputBox("Ingrese el tamano de las matrices: ")
  For i = 0 To n - 1
      For j = 0 To n - 1
          matrix1(i, j) = Int((10 * Rnd) + 1)
          matrix2(i, j) = Int((10 * Rnd) + 1)
          matrix3(i, j) = matrix1(i, j) + matrix2(i, j)
      Next
  Next
  MsgBox ("La matriz resultante es: ")
  For i = 0 To n - 1
      For j = 0 To n - 1
          MsgBox ("posicion " & i & j & " : " & matrix3(i, j))
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
      "Se define las variable matrix1 que va ser una matriz de 100x100",
      "",
    ],
    [
      "Se define las variable matrix2 que va ser una matriz de 100x100",
      "",
    ],
    [
      "Se define las variable matrix3 que va ser una matriz de 100x100",
      "",
    ],
    [
      "Se definen las variables i,j,n",
      "",
    ],
    [
      "Se le pide al usuario que ingrese el tamaño de las matrices",
      "",
    ],
    [
      "Se almacena lo ingresado por el usuario en la variable n",
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
      "Se define una variable llamada rand que es de la clase Random esto sirve para despues usar un método que devuelve números aleatorios entre dos rangos de números",
      "",
    ],
    [
      "Se asigna a la variable matrix1 en la posición [i][j] un número aleatorio entre 1 y 10",
      "",
    ],
    [
      "Se asigna a la variable matrix2 en la posición [i][j] un número aleatorio entre 1 y 10",
      "",
    ],
    [
      "Se asigna a la variable matrix3 en la posición [i][j] la suma del valor que se encuentra en la variable matrix1[i][j] con el valor que se encuentra en la variable matrix2[i][j]",
      "",
    ],
    [
      "Se cierra el ciclo for para j",
      "",
    ],
    [
      "Se cierra el ciclo for para i",
      "",
    ],
    [
      "Se imprime que la matriz resultante es",
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
      "Se imprime el valor que se encuentra en la posición [i][j] de matrix3",
      "",
    ],
    [
      "Se cierra el ciclo for para j",
      "",
    ],
    [
      "Se cierra el ciclo for para i",
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
    ]
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
      this.variable_line = `i = ${this.i} - n = ${this.n}`
      return
    }
    if(this.current_line == 11){
      this.variable_line = `j = ${this.j} - n = ${this.n}`
      return
    }
    if(this.current_line == 13){
      this.variable_line = `i = ${this.i} - j = ${this.j}`
      this.aux_matrix1.push(Math.floor(Math.random() * 10) + 1);
      return
    }
    if(this.current_line == 14){
      this.variable_line = `i = ${this.i} - j = ${this.j}`
      this.aux_matrix2.push(Math.floor(Math.random() * 10) + 1);
      return
    }
    if(this.current_line == 15){
      this.variable_line = `matrix1[${this.i},${this.j}] = ${this.aux_matrix1[this.j]} - matrix2[${this.i},${this.j}] = ${this.aux_matrix2[this.j]}`
      this.aux_matrix3.push(this.aux_matrix1[this.j] + this.aux_matrix2[this.j]);
      return
    }
    if(this.current_line == 18){
      this.variable_line = `La matriz resultante es:`
      return
    }
    if(this.current_line == 19){
      this.variable_line = `i = ${this.i} - n = ${this.n}`
      return
    }
    if(this.current_line == 20){
      this.variable_line = `j = ${this.j} - n = ${this.n}`
      return
    }
    if(this.current_line == 21){
      this.variable_line = `posicion[${this.i}][${this.j}] = ${this.matrix3[this.i][this.j]}`
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
    if(this.current_line == 9){
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
        this.less_top_code1();
        this.less_top_code2();
      }
    }
    this.change_explain();
    this.showInput();
  }

  back_code_for = (id:number) => {
    if(id == 1){
      for (let p = 0; p < 5; p++) {
        this.less_top_code1()
      }
      for (let p = 0; p < 4; p++) {
        this.less_top_code2()
      }
    }
    if(id == 2){
      for (let p = 0; p < 7; p++) {
        this.less_top_code1()
      }
      for (let p = 0; p < 6; p++) {
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
      case 11:{
        if(this.i >= this.n){
          for (let p = 0; p < 6; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
          this.i = 0;
          this.j = 0;
        }
        break;
      }
      case 12:{
        if(this.j >= this.n){
          for (let p = 0; p < 4; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
          this.matrix3.push(this.aux_matrix3);
        }
        break;
      }
      case 16:{
        if(this.j < this.n){
          for (let p = 0; p < 5; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.j++;
          this.back_code_for(1);
        }
        break;
      }
      case 17:{
        if(this.i < this.n){
          for (let p = 0; p < 7; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.i++;
          this.j = 0;
          this.aux_matrix1 = [];
          this.aux_matrix2 = [];
          this.aux_matrix3 = [];
          this.back_code_for(2);
        }
        break;
      }
      case 20:{
        if(this.i >= this.n){
          for (let p = 0; p < 3; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 21:{
        if(this.j >= this.n){
          for (let p = 0; p < 1; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 22:{
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
      case 23:{
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


