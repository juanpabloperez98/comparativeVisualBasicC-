/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-multiples2',
  templateUrl: './ejemplo-multiples2.component.html',
  styleUrls: ['./ejemplo-multiples2.component.scss']
})
export class EjemploMultiples2Component implements OnInit {

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
  selector: 'app-ejemplo-multiples2',
  templateUrl: './ejemplo-multiples2.component.html',
  styleUrls: ['./ejemplo-multiples2.component.scss']
})
export class EjemploMultiples2Component implements OnInit {

  current_line = 1;
  max_line = 42;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  dia:number = 0;

  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,

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
  ]

  CODECVB = ` Sub Ejemplo3()
    Dim dia As Integer
    dia = InputBox("Ingrese el número del día")
    Select Case dia
        Case 1:
            MsgBox ("Día lunes")
        Case 2:
            MsgBox ("Día martes")
        Case 3:
            MsgBox ("Día miercoles")
        Case 4:
            MsgBox ("Día jueves")
        Case 5:
            MsgBox ("Día viernes")
        Case 6:
            MsgBox ("Día sabado")
        Case 7:
            MsgBox ("Día domingo")
        Case Else
            MsgBox ("Día no valido")
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
      "Se define la variable dia de tipo entero en los dos códigos",
      "",
    ],
    [
      "Se captura el valor ingresado por el usuario en la variable dia",
      "",
    ],
    [
      "Se utiliza la sentencía switch poniendo como argumento la variable dia, para validar si cumple con alguno de los casos siguientes",
      "",
    ],
    [
      "Se valida si dia es igual a 1",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el dia es lunes",
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
      "Se valida si dia es igual a 2",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el dia es martes",
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
      "Se valida si dia es igual a 3",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el dia es miercoles",
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
      "Se valida si dia es igual a 4",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el dia es jueves",
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
      "Se valida si dia es igual a 5",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el dia es viernes",
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
      "Se valida si dia es igual a 6",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el dia es sabado",
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
      "Se valida si dia es igual a 7",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el dia es domingo",
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
      "Como ninguno de los valores ingresados coinciden con los casos anteriores, entonces entra al default",
      "",
    ],
    [
      "Se imprime que el dia no es valido",
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
    if(this.current_line == 6){
      this.variable_line = `dia = ${this.dia}`
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
    if(this.current_line == 5){
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
      case 6:{
        if(this.valueField == ""){
          Swal.fire('Ingrese un valor','Debe ingresar un valor para continuar','error');
          this.back_code();
        }
        if(this.valueField != "" && Number.isNaN(parseInt(this.valueField))){
          Swal.fire('Ingrese un numero valido','Debe ingresar un numero valido para continuar','error');
          this.back_code();
        }
        this.dia = parseInt(this.valueField);
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
    let dias = [1,2,3,4,5,6,7];
    switch(this.current_line){
      case 7:{
        if(dias.includes(this.dia)){
          let factorM = (this.dia * 4) - 4
          for (let i = 0; i < factorM; i++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }else{
          let factorM = (18 * 4) - 4
          for (let i = 0; i < factorM; i++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 11:{
        for (let i = 0; i < 28; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 15:{
        for (let i = 0; i < 24; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 19:{
        for (let i = 0; i < 20; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 23:{
        for (let i = 0; i < 16; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 27:{
        for (let i = 0; i < 12; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 31:{
        for (let i = 0; i < 8; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 35:{
        for (let i = 0; i < 4; i++) {
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


