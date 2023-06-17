import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-for3',
  templateUrl: './ejemplo-for3.component.html',
  styleUrls: ['./ejemplo-for3.component.scss']
})
export class EjemploFor3Component implements OnInit {

  current_line = 1;
  max_line = 20;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  n:number = 0;
  x:number = 0;
  y:number = 1;
  z:number = 1;
  i:number = 0;


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
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.secondCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
  ]

  CODECVB = ` Sub Ejemplo3()
  Dim n,x,y,z,i As Integer
  x = 0
  y = 1
  z = 1
  n = InputBox("Ingresar el número de elementos: ")
  MsgBox ("1")
  For i = 1 To n
      z = x + y
      MsgBox (z)
      x = y
      y = z
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
      "Se define las variable n,x,y,z,i de tipo int",
      "",
    ],
    [
      "La variable x se iguala a cero",
      "",
    ],
    [
      "La variable y se iguala a 1",
      "",
    ],
    [
      "La variable z se iguala a 1",
      "",
    ],
    [
      "Se le pide al usuario que ingrese el número de elementos que va a tener la serie",
      "",
    ],
    [
      "Se captura lo ingresado por el usuario en la variable n",
      "",
    ],
    [
      "Luego se imprime el primer elemento de la serie de fibonnaci que es el 1",
      "",
    ],
    [
      "Se utiliza la sentencia for para recorrer desde i = 0 hasta el valor de n",
      "",
    ],
    [
      "La variable z se actualiza a la suma de los valores de las variables x + y",
      "",
    ],
    [
      "Se imprime el valor de z",
      "",
    ],
    [
      "Se actualiza el valor de la variable x al valor de la variable y",
      "",
    ],
    [
      "Se actualiza el valor de la variable y al valor de la variable z",
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
      this.variable_line = `1`
      return
    }
    if(this.current_line == 11){
      this.variable_line = `i = ${this.i} - n = ${this.n}`
      return
    }
    if(this.current_line == 12){
      this.variable_line = `x = ${this.x} - y = ${this.y}`
      this.z = this.x + this.y;
      return
    }
    if(this.current_line == 13){
      this.variable_line = `z = ${this.z}`
      return
    }
    if(this.current_line == 14){
      this.variable_line = `y = ${this.y}`
      this.x = this.y;
      return
    }
    if(this.current_line == 15){
      this.variable_line = `z = ${this.z}`
      this.y = this.z;
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
    for (let p = 0; p < 5; p++) {
      this.less_top_code1()
      this.less_top_code2()
    }
    this.add_variable()
  }


  jump = () => {
    switch(this.current_line){
      case 12:{
        if(this.i >= this.n){
          for (let p = 0; p < 5; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 17:{
        if(this.i < this.n){
          for (let p = 0; p < 6; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.i++;
          this.back_code_for();
        }
        break;
      }
      /* case 12:{
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




