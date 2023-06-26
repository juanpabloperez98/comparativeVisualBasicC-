import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Direction } from 'src/app/modules/secuencia/utils/direction.enum';

@Component({
  selector: 'app-ejemplo-listas1',
  templateUrl: './ejemplo-listas1.component.html',
  styleUrls: ['./ejemplo-listas1.component.scss']
})
export class EjemploListas1Component implements OnInit {

  current_line = 1;
  max_line = 26;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  inputShow = false;
  valueField = "";

  //Program values
  cant:number = 0;
  i:number = 0;
  arreglo: number[] = [];
  suma:number = 0;

  lines_jump: number[] = [
    Direction.firstCode,
    Direction.firstCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
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
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.thirdCode,
    Direction.firstCode,
    Direction.firstCode,
  ]

  CODECVB = ` Sub Ejemplo1()
  Dim cant As Integer
  cant = MsgBox("Ingrese la cantidad de datos agregar")
  If cant <= 5 Then
      Dim arreglo(5) As Integer
      Dim i,suma As Integer
      For i = 0 To cant - 1
          arreglo(i) = Int((10 * Rnd) + 1)
      Next
      suma = 0
      For i = 0 To cant - 1
          MsgBox ("numero " & arreglo(i))
          suma = suma + arreglo(i)
      Next
      MsgBox ("La suma de todos los número aleatorios es: " & suma)
  Else
      MsgBox ("La cantidad de numeros que desea ingresar es mayor a 5")
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
      "Se define la variable cant de tipo entero",
      "",
    ],
    [
      "Se le pide al usuario que ingrese la cantidad de datos agregar",
      "",
    ],
    [
      "Se iguala la variable cant a lo que ingrese el usuario por pantalla",
      "",
    ],
    [
      "Se valida si la variable cant es menor o igual a 5",
      "",
    ],
    [
      "Se define la variable arreglo, en el código de VB se determina la longitud que seria 5",
      "",
    ],
    [
      "Se le asigna la longitud de 5 a la variable arreglo definida anteriormente, en el código de C#",
      "",
    ],
    [
      "Se definen las variables i,suma de tipo int",
      "",
    ],
    [
      "Se utiliza la sentencia for para recorrer desde i = 0 hasta el valor de la variable cant",
      "",
    ],
    [
      "Se define una variable llamada rand que es de la clase Random esto sirve para despues usar un método que devuelve números aleatorios entre dos rangos de números",
      "",
    ],
    [
      "Se asigna a la variable arreglo en la posición i un número aleatorio entre 1 y 10",
      "",
    ],
    [
      "Se cierra el ciclo for",
      "",
    ],
    [
      "La variable suma se iguala a cero",
      "",
    ],
    [
      "Se utiliza la sentencia for para recorrer desde i = 0 hasta el valor de la variable cant",
      "",
    ],
    [
      "Se imprime el número que esta almacenado en la lista arreglo en la posición i",
      "",
    ],
    [
      "La variable suma se aumenta en el número que esta almacenado en la lista arreglo en la posición i",
      "",
    ],
    [
      "Se cierra el ciclo for",
      "",
    ],
    [
      "Se imprime el valor de la variable suma",
      "",
    ],
    [
      "Como la cóndición no se cumplio entonces",
      "",
    ],
    [
      "Se imprime que la cantidad de numeros que desea ingresar es mayor a 5",
      "",
    ],
    [
      "Se cierra el cóndicional",
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
      this.variable_line = `cant = ${this.cant}`
      return
    }
    if(this.current_line == 11){
      this.variable_line = `i = ${this.i} - cant = ${this.cant}`
      return
    }
    if(this.current_line == 13){
      this.variable_line = `i = ${this.i}`
      this.arreglo.push(Math.floor(Math.random() * 10) + 1);
      return
    }
    if(this.current_line == 16){
      this.variable_line = `i = ${this.i} - cant = ${this.cant}`
      return
    }
    if(this.current_line == 17){
      this.variable_line = `numero: ${this.arreglo[this.i]}`
      return
    }
    if(this.current_line == 18){
      this.variable_line = `arreglo(i) = ${this.arreglo[this.i]} - suma = ${this.suma}`
      this.suma += this.arreglo[this.i];
      return
    }
    if(this.current_line == 20){
      this.variable_line = `La suma de todos los número aleatorios es: ${this.suma}`
      return
    }
    if(this.current_line == 22){
      this.variable_line = `La cantidad de numeros que desea ingresar es mayor a 5`
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
        this.cant = parseInt(this.valueField);
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

  back_code_for = (id:number) => {
    if(id == 1){
      for (let p = 0; p < 3; p++) {
        this.less_top_code1()
      }
      for (let p = 0; p < 2; p++) {
        this.less_top_code2()
      }
    }else{
      for (let p = 0; p < 3; p++) {
        this.less_top_code1()
        this.less_top_code2()
      }
    }

    this.add_variable()
  }


  jump = () => {
    switch(this.current_line){
      case 8:{
        if(this.cant > 5){
          for (let p = 0; p < 13; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
        }
        break;
      }
      case 12:{
        if(this.i >= this.cant){
          for (let p = 0; p < 2; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
          this.i = 0;
        }
        break;
      }
      case 14:{
        if(this.i < this.cant){
          for (let p = 0; p < 3; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.i++;
          this.back_code_for(1);
        }
        break;
      }
      case 17:{
        if(this.i >= this.cant){
          for (let p = 0; p < 2; p++) {
            this.current_line += 1;
            this.change_line();
            this.change_explain();
          }
          this.i = 0;
        }
        break;
      }
      case 19:{
        if(this.i < this.cant){
          for (let p = 0; p < 3; p++) {
            this.current_line -= 1;
            this.change_explain();
          }
          this.i++;
          this.back_code_for(2);
        }
        break;
      }
      case 21:{
        for (let p = 0; p < 2; p++) {
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


