import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-for1',
  templateUrl: './ejemplo-for1.component.html',
  styleUrls: ['./ejemplo-for1.component.scss']
})
export class EjemploFor1Component implements OnInit {

  current_line = 1;
  max_line = 13;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  i:number = 2;


  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
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

  CODECVB = ` Sub Ejemplo1()
    Dim i As Integer
    For i = 2 To 12
        If i Mod 2 = 0 Then
            MsgBox ("Numero par: " & i)
        End If
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
      "Se define una variable i de tipo entero",
      "",
    ],
    [
      "Se utiliza la sentencia for para recorrer desde i hasta 12",
      "",
    ],
    [
      "Se valida si el modulo de i entre 2 es igual a cero",
      "",
    ],
    [
      "Como la condición se cumplio entonces se imprime que el número i es par",
      "",
    ],
    [
      "Se cierra el if",
      "",
    ],
    [
      "Se utiliza la plabara reservada Next para seguir iterando",
      "",
    ],
    [
      "Se cierra el for",
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
    if(this.current_line == 5 || this.current_line == 6){
      this.variable_line = `i = ${this.i}`
      return
    }
    if(this.current_line == 7){
      if(this.i%2 == 0){
        this.variable_line = `Numero par: ${this.i}`
      }
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

  back_code_for = () => {
    for (let p = 0; p < 4; p++) {
      this.less_top_code1()
      this.less_top_code2()
    }
    this.add_variable()
  }


  jump = () => {
    switch(this.current_line){
      case 6:{
        if(this.i > 12){
          for (let p = 0; p < 3; p++) {
            this.current_line += 1;
            this.change_line();
          }
        }
        break;
      }
      case 7:{
        if(this.i%2 != 0){
          this.current_line += 1;
          this.change_line();
        }
        break;
      }
      case 10:{
        if(this.i < 13){
          for (let p = 0; p < 5; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.i++;
          this.back_code_for();
        }
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


