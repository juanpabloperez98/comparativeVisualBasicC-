import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.scss']
})
export class Ejemplo2Component implements OnInit {

  current_line = 1;
  max_line = 16;
  top1 = 16;
  top2 = 16;
  top_style1 = this.top1 + 'px';
  top_style2 = this.top2 + 'px';
  line_to_jump = [4,7]
  line_equal_jump = [4]
  code_direction = 1;

  CODECSHARP = ` namespace Ejemplo1{
    class Program{
          static void Main(string[] args){
              string MSJ
              MSJ = "Hola mundo, este es mi primer programa"
              Console.WriteLine("Hello World!");
          }
      }
  }
  `
  CODECVB = ` Public Sub Ejemplo2()
  Dim num1 As Integer
  Dim num2 As Integer
  Dim num3 As Integer
  num1 = 4
  num2 = 3
  num3 = 5
  MsgBox (num2)
  MsgBox (num1)
  MsgBox (num3)
End Sub
  `

  explain = [
    [
      "Se empieza definiendo el código, en este caso se le llama Ejemplo2",
      "",
    ],
    [
      "Se define la clase en en código de C#",
      "",
    ],
    [
      "Se define un metodo llamado Main que será tipo static",
      "",
    ],
    [
      "Luego se declara una variable con el nombre MSJ de tipo String, tanto para el código de C# Como el de Visual Basic",
      ""
    ],
    [
      "La variable MSJ se iguala al mensaje correspondiente, en este caso “Hola mundo, este es mi primer programa”",
      "MSJ = 'Hola mundo, este es mi primer programa'",
    ],
    [
      "Se imprime por pantalla la variable MSJ",
      "MSJ = 'Hola mundo, este es mi primer programa'",
    ],
    [
      "Se cierra el método en el código de C#",
      ""
    ],
    [
      "Se cierra la clase",
      ""
    ],
    [
      "Fin del programa",
      ""
    ]
  ]

  text_explain = this.explain[this.current_line - 1][0];
  variable_line = this.explain[this.current_line - 1][1];

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

  add_top = () => {
    if (this.code_direction == 1) {
      this.add_top_code1()
    } else if(this.code_direction == 2){
      this.add_top_code2()
    }else{
      this.add_top_code1()
      this.add_top_code2()
    }
    if (this.line_to_jump.includes(this.current_line)) {
      if (this.code_direction == 1) {
        this.add_top_code2()
        this.code_direction = 2;
      } else if(this.code_direction == 2){
        this.add_top_code1()
        this.code_direction = 1;
      }
    }
    switch(this.current_line){
      case 7:{
        this.code_direction = 3;
        break;
      }
      case 10:{
        this.code_direction = 2;
        break;
      }
      case 13:{
        this.code_direction = 1;
        break;
      }
    }
    /* if(this.line_equal_jump.includes(this.current_line)){
      this.code_direction = 3;
    } */
  }
  change_explain = () => {
    this.text_explain = this.explain[this.current_line - 1][0];
    this.variable_line = this.explain[this.current_line - 1][1];
  }
  next = () => {
    if (this.current_line >= this.max_line) {
      return;
    }
    this.current_line += 1;
    console.log(this.current_line);
    this.add_top();
    this.change_explain();
    if (this.current_line >= this.max_line) {
      Swal.fire('Código finalizado');
      this.location.back();
      return;
    }
  }

}
