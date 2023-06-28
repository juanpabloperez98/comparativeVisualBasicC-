/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-listas3',
  templateUrl: './ejemplo-listas3.component.html',
  styleUrls: ['./ejemplo-listas3.component.scss']
})
export class EjemploListas3Component implements OnInit {

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
  selector: 'app-ejemplo-listas3',
  templateUrl: './ejemplo-listas3.component.html',
  styleUrls: ['./ejemplo-listas3.component.scss']
})
export class EjemploListas3Component implements OnInit {

  current_line = 1;
  max_line = 15;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  i:number = 0;
  prod_escalar:number = 0;
  tam:number = 6;
  arreglo1: number[] = [2,3,4,5,6,7];
  arreglo2: number[] = [5,6,7,8,9,2];

  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
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
    Direction.firstCode,
    Direction.firstCode,
  ]

  CODECVB = ` Sub Ejemplo3()
  Dim i,prod_escalar,tam As Integer
  tam = 6
  prod_escalar = 0
  Dim arreglo1(6) As Integer = {2,3,4,5,6,7}
  Dim arreglo2(6) As Integer = {5,6,7,8,9,2}
  For i = 0 To tam - 1
      prod_escalar = (arreglo1(i) * arreglo2(i)) + prod_escalar
  Next
  MsgBox ("El producto escalar es: " & prod_escalar)
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
      "Se define las variables i,prod_escalar,tam de tipo entero",
      "",
    ],
    [
      "Se le da el valor de 6 a la variable tam",
      "",
    ],
    [
      "Se le da el valor de 0 al la variable prod_escalar",
      "",
    ],
    [
      "Se define la variable arreglo1 con los elementos 2,3,4,5,6,7",
      "",
    ],
    [
      "Se define la variable arreglo2 con los elementos 5,6,7,8,9,2",
      "",
    ],
    [
      "Se utiliza la sentencia for para recorrer desde i = 0 hasta el valor de la variable tam menos 1 en el caso del código VB",
      "",
    ],
    [
      "Se iguala la variable prod_escalar al resultado de multiplicar el elemento de arreglo1 en la posición i por el elemento de arreglo2 en la posición i y sumado por el valor prod_escalar",
      "",
    ],
    [
      "Se cierra el ciclo for",
      "",
    ],
    [
      "Se imprime el valor de la variable prod_escalar",
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
    if(this.current_line == 5){
      this.variable_line = `tam = ${this.tam}`
      return
    }
    if(this.current_line == 6){
      this.variable_line = `prod_escalar = ${this.prod_escalar}`
      return
    }
    if(this.current_line == 7){
      this.variable_line = `arreglo1 = ${this.arreglo1}`
      return
    }
    if(this.current_line == 8){
      this.variable_line = `arreglo2 = ${this.arreglo2}`
      return
    }
    if(this.current_line == 9){
      this.variable_line = `i = ${this.i} - tam = ${this.tam}`
      return
    }
    if(this.current_line == 10){
      this.variable_line = `arreglo1[i] = ${this.arreglo1[this.i]} - arreglo2[i] = ${this.arreglo2[this.i]} - prod_escalar = ${this.prod_escalar}`
      return
    }
    if(this.current_line == 12){
      this.variable_line = `El producto escalar es: ${this.prod_escalar}`
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
    for (let p = 0; p < 2; p++) {
      this.less_top_code1()
      this.less_top_code2()
    }
    this.add_variable()
  }


  jump = () => {
    switch(this.current_line){
      case 10:{
        if(this.i >= this.tam){
          for (let p = 0; p < 1; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 11:{
        if(this.i < this.tam){
          for (let p = 0; p < 2; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.prod_escalar = (this.arreglo1[this.i] * this.arreglo2[this.i]) + this.prod_escalar;
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
    // this.showInput()
    // this.validate_next()
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



