import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from '../../utils/direction.enum';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.scss']
})
export class Ejemplo3OperadoresComponent implements OnInit {



  current_line = 1;
  max_line = 18;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';

  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.secondCode,
    Direction.secondCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
  ]

  CODECVB = ` Sub Ejemplo3()
  Dim valor1 As Long
  Dim valor2 As Long
  Dim valor3 As Long
  Dim promedio As Long
  valor1 = InputBox("Ingresa el valor del plato1: ")
  valor2 = InputBox("Ingresa el valor del plato2: ")
  valor3 = InputBox("Ingresa el valor del plato3: ")
  promedio = (valor1 + valor2 + valor3) / 3
  MsgBox ("El promedio de los platos es: " & promedio)
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
      "Se declaran 3 variables en el código de C# llamadas valor1, valor2, valor3 y en el código de visual basic se declara valor1",
      "",
    ],
    [
      "Se declara valor2 en el código de visual basic",
      "",
    ],
    [
      "Se declara valor3 en el código de visual basic",
      "",
    ],
    [
      "Se declara la variable promedio en los dos códigos, esta variable va a servir para guardar el promedio de los 3 valores ingresados por el usuario",
      "",
    ],
    [
      "Se imprime por consola que ingrese el valor 1",
      "",
    ],
    [
      "Se captura el valor ingresado por el usuario y se almacena en la variable valor1",
      "",
    ],
    [
      "Se imprime por consola que ingrese el valor 2",
      "",
    ],
    [
      "Se captura el valor ingresado por el usuario y se almacena en la variable valor2",
      "",
    ],
    [
      "Se imprime por consola que ingrese el valor 3",
      "",
    ],
    [
      "Se captura el valor ingresado por el usuario y se almacena en la variable valor3",
      "",
    ],
    [
      "La variable promedio se iguala a la operación de sumar los valores de las 3 variables dividido entre 3",
      "",
    ],
    [
      "Se imprime el promedio de los platos, imprimiendo el valor de la variable promedio",
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
  next = () => {
    if (this.current_line >= this.max_line) {
      return;
    }
    this.current_line += 1;
    this.change_line();
    this.change_explain()
    console.log(this.current_line);
    console.log(this.max_line);
    console.log("******************************");
    if (this.current_line >= this.max_line) {
      Swal.fire('Código finalizado');
      this.location.back();
      return;
    }
  }

}
