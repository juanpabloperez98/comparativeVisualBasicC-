import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-multiples3',
  templateUrl: './ejemplo-multiples3.component.html',
  styleUrls: ['./ejemplo-multiples3.component.scss']
})
export class EjemploMultiples3Component implements OnInit {

  current_line = 1;
  max_line = 37;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  num:number = 0;
  digito1:number = 0;
  digito2:number = 0;
  primo_d1:boolean = false;
  primo_d2:boolean = false;


  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.secondCode,
    Direction.secondCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.secondCode,
    Direction.thirdCode,
    Direction.secondCode,
    Direction.thirdCode,
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
  Dim num As Integer
  Dim primo_d1 As Boolean
  Dim primo_d2 As Boolean
  num = InputBox("Ingrese el número: ")
  If (num > 9 And num < 100) Then
      Dim digito1 As Integer
      digito1 = num / 10
      Dim digito2 As Integer
      digito2 = num Mod 10
      Select Case digito1
          Case 2:Case 3:
          Case 5:Case 7:
              primo_d1 = True
      End Select
      Select Case digito2
          Case 2:Case 3:
          Case 5:Case 7:
              primo_d2 = True
      End Select
      If (primo_d1 = True And primo_d2 = True) Then
          MsgBox ("Los DOS digitos son números primos")
      Else
          MsgBox ("Los DOS digitos no son números primos")
      End If
  Else
      MsgBox ("El numero no es de dos digitos")
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
      "Se define la variable num de tipo entero",
      "",
    ],
    [
      "Se define la variable primo_d1 en el código de Visual Basic",
      "",
    ],
    [
      "Se define la variable primo_d2 en el código de Visual Basic",
      "",
    ],
    [
      "En el código de C# se definen las mismas variables primo_d1, primo_d2 dandoles valores por defecto igual a false",
      "",
    ],
    [
      "Se le pide al usuario que ingrese el número",
      "",
    ],
    [
      "Se captura lo ingresado por el usuario en la variable num",
      "",
    ],
    [
      "Se valida si el numero ingresado por el usuario esta en los rangos mayores a 9 y menores a 100",
      "",
    ],
    [
      "Se define la variable digito1 de tipo entero en el código de visual basic",
      "",
    ],
    [
      "Se iguala la variable digito1 a la operación de num/10",
      "",
    ],
    [
      "Se define la variable digito2 de tipo entero en el código de visual basic",
      "",
    ],
    [
      "Se iguala la variable digito2 a la operación del módulo de num entre 10",
      "",
    ],
    [
      "Se utiliza la sentencía switch poniendo como argumento la variable digito1, para validar si cumple con alguno de los casos siguientes",
      "",
    ],
    [
      "En caso de que digito1 sea igual a 2 o 3",
      "",
    ],
    [
      "O tambien de que digito1 sea igual 5 o 7",
      "",
    ],
    [
      "La variable primo_d1 se vuelve en true",
      "",
    ],
    [
      "Se sale del switch con el break",
      "",
    ],
    [
      "Se cierra el switch",
      "",
    ],
    [
      "Se utiliza la sentencía switch poniendo como argumento la variable digito2, para validar si cumple con alguno de los casos siguientes",
      "",
    ],
    [
      "En caso de que digito2 sea igual a 2 o 3",
      "",
    ],
    [
      "O tambien de que digito2 sea igual 5 o 7",
      "",
    ],
    [
      "La variable primo_d2 se vuelve en true",
      "",
    ],
    [
      "Se sale del switch con el break",
      "",
    ],
    [
      "Se cierra el switch",
      "",
    ],
    [
      "Se valida si primo_d1 es igual a true y primo_d2 es igual a true",
      "",
    ],
    [
      "Como la condición se cumplio entonces se imprime que los dos digitos son números primos",
      "",
    ],
    [
      "Como la condición no se cumplio entonces",
      "",
    ],
    [
      "Se imprime que los dos digitos no son primos",
      "",
    ],
    [
      "Se cierra el if",
      "",
    ],
    [
      "Como la condición no se cumplio entonces",
      "",
    ],
    [
      "Se imprime que el número no es de 2 dígitos",
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
    if(this.current_line == 10){
      this.variable_line = `num = ${this.num}`
      return
    }
    if(this.current_line == 12){
      this.digito1 = Math.floor(this.num/10);
      this.variable_line = `num = ${this.num} - digito1 = ${this.digito1}`
    }
    if(this.current_line == 14){
      this.digito2 = this.num%10;
      this.variable_line = `num = ${this.num} - digito2 = ${this.digito2}`
    }
    if(this.current_line == 15){
      this.variable_line = `digito1 = ${this.digito1}`
    }
    if(this.current_line == 18){
      this.variable_line = `digito1 = ${this.digito1}`
    }
    if(this.current_line == 21){
      this.variable_line = `digito2 = ${this.digito2}`
    }
    if(this.current_line == 27){
      this.variable_line = `primo_d1 = ${this.primo_d1} - primo_d2 = ${this.primo_d2}`
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
        this.num = parseInt(this.valueField);
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
        if(this.current_line == 10){
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
    switch(this.current_line){
      case 11:{
        if(this.num < 9 && this.num > 100){
          for (let i = 0; i < 21; i++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 16:{
        let digitos = [2,3,5,7]
        if(!digitos.includes(this.digito1)){
          for (let i = 0; i < 4; i++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 22:{
        let digitos = [2,3,5,7]
        if(!digitos.includes(this.digito2)){
          for (let i = 0; i < 4; i++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
          this.variable_line = ''
        }
        break;
      }

      case 28:{
        if(!this.primo_d1 || !this.primo_d2){
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 32:{
        for (let i = 0; i < 3; i++) {
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



