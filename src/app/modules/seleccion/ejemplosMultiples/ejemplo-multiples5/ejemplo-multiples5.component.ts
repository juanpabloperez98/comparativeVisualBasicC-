import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-multiples5',
  templateUrl: './ejemplo-multiples5.component.html',
  styleUrls: ['./ejemplo-multiples5.component.scss']
})
export class EjemploMultiples5Component implements OnInit {

  current_line = 1;
  max_line = 24;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  op:number = 0;


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

  CODECVB = ` Sub Ejemplo5()
    Dim opcion As Integer
    MsgBox ("1.)Computadores - 2.)Celulares")
    opcion = InputBox("Ingrese una categoria:")
    Select Case opcion
        Case 1:
            MsgBox ("Computador Acer: 1.000.000 - Computador Asus: 1.600.000")
        Case 2:
            MsgBox ("Celular iPhone 6: 1.800.000 - Celular Samsung j5: 700.000")
        Case Else:
            MsgBox ("No existe esta categoria")
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
      "Se definen la variables opcion de tipo int en los dos códigos",
      "",
    ],
    [
      "Se imprime un mensaje indicando cuales son las opciones, en este caso 1 para computadores 2 para celulares",
      "",
    ],
    [
      "Se imprime un mensjae en el código de C# pidiendo que ingrese la categoría",
      "",
    ],
    [
      "Se captura el valor ingresado por el usuario en la variable opcion declarada anteriormente",
      "",
    ],
    [
      "Luego se utiliza la sentencia switch pasando como valor de comparación la variable opcion",
      "",
    ],
    [
      "Como la variable opcion es igual a 1 entonces entra en el case 1",
      "",
    ],
    [
      "Se imprime los precios de los computadores",
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
      "Como la variable opcion es igual a 2 entonces entra en el case 2",
      "",
    ],
    [
      "Se imprime los precios de los celulares",
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
      "Como la variable opcion no es igual a ningun caso entonces entra al default",
      "",
    ],
    [
      "Se imprime que no existe esa categoria",
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
    if(this.current_line == 8){
      this.variable_line = `opcion = ${this.op}`
      return
    }
    if(this.current_line == 10){
      this.variable_line = `Computador Acer: 1.000.000 - Computador Asus: 1.600.000`
      return
    }
    if(this.current_line == 14){
      this.variable_line = `Celular iPhone 6: 1.800.000 - Celular Samsung j5: 700.000`
      return
    }
    if(this.current_line == 18){
      this.variable_line = `No existe esta categoria`
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
        this.op = parseInt(this.valueField);
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

  jump = () => {
    switch(this.current_line){
      case 9:{
        if(this.op == 1){

        }else if(this.op == 2){
          for (let i = 0; i < 4; i++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }else{
          for (let i = 0; i < 8; i++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 13:{
        for (let i = 0; i < 8; i++) {
          this.current_line += 1;
          this.change_line();
          this.change_explain();
        }
        break;
      }
      case 17:{
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

