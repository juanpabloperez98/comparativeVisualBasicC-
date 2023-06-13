import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-multiples1',
  templateUrl: './ejemplo-multiples1.component.html',
  styleUrls: ['./ejemplo-multiples1.component.scss']
})
export class EjemploMultiples1Component implements OnInit {

  current_line = 1;
  max_line = 63;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  mes:number = 0;

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
  ]

  CODECVB = ` Sub Ejemplo1()
  Dim mes As Integer
  mes = InputBox("Ingrese un número: ")
  Select Case mes
     Case 1
         MsgBox ("Mes: enero")
     Case 2
         MsgBox ("Mes: febrero")
     Case 3
         MsgBox ("Mes: marzo")
     Case 4
         MsgBox ("Mes: abril")
     Case 5
         MsgBox ("Mes: mayo")
     Case 6
         MsgBox ("Mes: junio")
     Case 7
         MsgBox ("Mes: julio")
     Case 8
         MsgBox ("Mes: agosto")
     Case 9
         MsgBox ("Mes: septiembre")
     Case 10
         MsgBox ("Mes: octubre")
     Case 11
         MsgBox ("Mes: noviembre")
     Case 12
         MsgBox ("Mes: diciembre")
     Case Else
         MsgBox ("Mes no valido")
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
      "Se define la variable mes de tipo entero en los dos códigos",
      "",
    ],
    [
      "Se le pide al usuario que ingrese un número indicando el mes",
      "",
    ],
    [
      "Se captura el valor ingresado por el usuario en la variable mes",
      "",
    ],
    [
      "Se utiliza la sentencía switch poniendo como argumento la variable mes, para validar si cumple con alguno de los casos siguientes",
      "",
    ],
    [
      "Se valida si mes es igual a 1",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el mes es enero",
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
      "Se valida si mes es igual a 2",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el mes es febrero",
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
      "Se valida si mes es igual a 3",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el mes es marzo",
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
      "Se valida si mes es igual a 4",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el mes es abril",
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
      "Se valida si mes es igual a 5",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el mes es mayo",
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
      "Se valida si mes es igual a 6",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el mes es junio",
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
      "Se valida si mes es igual a 7",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el mes es julio",
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
      "Se valida si mes es igual a 8",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el mes es agosto",
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
      "Se valida si mes es igual a 9",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el mes es septiembre",
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
      "Se valida si mes es igual a 10",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el mes es octubre",
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
      "Se valida si mes es igual a 11",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el mes es noviembre",
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
      "Se valida si mes es igual a 12",
      "",
    ],
    [
      "Como la condición se cumple entonces se imprime que el mes es diciembre",
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
      "Se imprime que el mes no es valido",
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
    if(this.current_line == 7){
      this.variable_line = `mes = ${this.mes}`
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
    if(this.current_line == 6){
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
        this.mes = parseInt(this.valueField);
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
    let meses = [1,2,3,4,5,6,7,8,9,10,11,12];
    switch(this.current_line){
      case 8:{
        if(meses.includes(this.mes)){
          let factorM = (this.mes * 4) - 4
          for (let i = 0; i < factorM; i++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }else{
          let factorM = (13 * 4) - 4
          for (let i = 0; i < factorM; i++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 12:{
        for (let i = 0; i < 48; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 16:{
        for (let i = 0; i < 44; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 20:{
        for (let i = 0; i < 40; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 24:{
        for (let i = 0; i < 36; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 28:{
        for (let i = 0; i < 32; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 32:{
        for (let i = 0; i < 28; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 36:{
        for (let i = 0; i < 24; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 40:{
        for (let i = 0; i < 20; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 44:{
        for (let i = 0; i < 16; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 48:{
        for (let i = 0; i < 12; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 52:{
        for (let i = 0; i < 8; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 56:{
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

