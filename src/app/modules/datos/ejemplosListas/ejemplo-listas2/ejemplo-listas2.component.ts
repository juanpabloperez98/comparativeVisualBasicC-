/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-listas2',
  templateUrl: './ejemplo-listas2.component.html',
  styleUrls: ['./ejemplo-listas2.component.scss']
})
export class EjemploListas2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 */
import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-listas2',
  templateUrl: './ejemplo-listas2.component.html',
  styleUrls: ['./ejemplo-listas2.component.scss']
})
export class EjemploListas2Component implements OnInit {

  current_line = 1;
  max_line = 17;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  numero:number = 0;
  i:number = 0;
  n_veces:number = 0;
  arreglo: number[] = [0,5,8,9,3,5];

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
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
  ]

  CODECVB = ` Sub Ejemplo2()
  Dim numero,n_veces,i, As Integer
  Dim arreglo(6) As Integer = {0,5,8,9,3,5}
  numero = InputBox("Ingrese el numero para validar si se encuentra en el arreglo:")
  n_veces = 0
  For i = 0 To UBound(arreglo) - 1
    If arreglo(i) = numero Then
          n_veces = n_veces + 1
    End If
  Next
  MsgBox ("El numero " & numero & " se encuentra " & n_veces & " veces")
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
      "Se define las variables numero,n_veces,i de tipo entero",
      "",
    ],
    [
      "Se define la variable arreglo con los elementos 0,5,8,9,3,5",
      "",
    ],
    [
      "Se le pide al usuario que ingrese el número a validar, para ver si se encuentra en el arreglo",
      "",
    ],
    [
      "Se captura lo ingresado por el usuario y se almacena en la variable numero",
      "",
    ],
    [
      "La variable n_veces se iguala a cero",
      "",
    ],
    [
      "Se utiliza la sentencia for para recorrer desde i = 0 hasta la longitud de la lista arreglo, notese que para obtener la longitud de una lista se utiliza el metodo Length en el código de C# y el metodo UBound en el código de VB",
      "",
    ],
    [
      "Se valida si el elemento almacenado en el arreglo en la posición i es igual a la variable numero",
      "",
    ],
    [
      "Como la condición se cumple entonces, la variable n_veces aumenta en 1",
      "",
    ],
    [
      "Se cierra el condicional",
      "",
    ],
    [
      "Se cierra el ciclo for",
      "",
    ],
    [
      "Se imprime cuantas veces se ha encontrado el número ingresado por el usuario",
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
      this.variable_line = `n_veces = ${this.n_veces}`
      return
    }
    if(this.current_line == 9){
      this.variable_line = `i = ${this.i} - arreglo.Length = ${this.arreglo.length}`
      return
    }
    if(this.current_line == 10){
      this.variable_line = `arreglo[i] = ${this.arreglo[this.i]} - numero = ${this.numero}`
      return
    }
    if(this.current_line == 11){
      if(this.arreglo[this.i] == this.numero){ this.n_veces ++; }
      this.variable_line = `n_veces = ${this.n_veces}`
      return
    }
    if(this.current_line == 14){
      this.variable_line = `El numero ${this.numero} se encuentra ${this.n_veces} veces`
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
        this.numero = parseInt(this.valueField);
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
    for (let p = 0; p < 4; p++) {
      this.less_top_code1()
      this.less_top_code2()
    }
    this.add_variable()
  }


  jump = () => {
    switch(this.current_line){
      case 10:{
        if(this.i >= this.arreglo.length){
          for (let p = 0; p < 3; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 11:{
        if(this.arreglo[this.i] != this.numero){
          for (let p = 0; p < 1; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 13:{
        if(this.i < this.arreglo.length){
          for (let p = 0; p < 4; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.i++;
          this.back_code_for();
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


