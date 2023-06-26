import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-while1',
  templateUrl: './ejemplo-while1.component.html',
  styleUrls: ['./ejemplo-while1.component.scss']
})
export class EjemploWhile1Component implements OnInit {

  current_line = 1;
  max_line = 18;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  suma:number = 0;
  numero:number = 0;


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
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
  ]

  CODECVB = ` Sub Ejemplo1()
  Dim numero,suma As Integer
  suma = 0
  numero = InputBox("Ingrese numero: ")
  While (numero <> 0)
      suma = suma + numero
      MsgBox ("Numero ingresado " & numero & " no es 0")
      numero = InputBox("Ingrese nuevamente el numero: ")
  Wend
  MsgBox ("Numero ingresado " & numero & "  es 0")
  MsgBox ("Suma total: " & suma)
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
      "Se define las variables numero,suma de tipo int",
      "",
    ],
    [
      "Se iguala la variable suma a cero",
      "",
    ],
    [
      "Se le pide al usuario que ingrese numero",
      "",
    ],
    [
      "Se iguala la variable numero a lo ingresado por el usuario",
      "",
    ],
    [
      "Se utiliza la sentencia while para recorrer mientras numero sea diferente de cero",
      "",
    ],
    [
      "La variable suma aumenta a la operación entre su valor más el valor de la variable numero",
      "",
    ],
    [
      "Se imprime que el numero ingresado no es cero",
      "",
    ],
    [
      "Se le pide al usuario que ingrese nuevamente el numero",
      "",
    ],
    [
      "Se captura el número ingresado por el usuario en la variable numero",
      "",
    ],
    [
      "Se cierra el while",
      "",
    ],
    [
      "Se imprime el numero ingresado",
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
    if(this.current_line == 8){
      this.variable_line = `numero = ${this.numero}`
      return
    }
    if(this.current_line == 9){
      this.variable_line = `suma = ${this.suma} - numero = ${this.numero}`
      this.suma = this.suma + this.numero;
      return
    }
    if(this.current_line == 10){
      this.variable_line = `Numero ingresado ${this.numero}`
      return
    }
    if(this.current_line == 14){
      this.variable_line = `Numero ingresado ${this.numero}`
      return
    }
    if(this.current_line == 15){
      this.variable_line = `Suma total ${this.suma}`
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
    if(this.current_line == 7 || this.current_line == 12){
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
      case 13:{
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
    for (let p = 0; p < 5; p++) {
      this.less_top_code1()
    }
    for (let p = 0; p < 4; p++) {
      this.less_top_code2()
    }
    this.add_variable()
  }


  jump = () => {
    switch(this.current_line){
      case 9:{
        if(this.numero == 0){
          for (let p = 0; p < 4; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 13:{
        if(this.numero != 0){
          for (let p = 0; p < 5; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.back_code_for();
        }
        break;
      }
      /* case 10:{
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


