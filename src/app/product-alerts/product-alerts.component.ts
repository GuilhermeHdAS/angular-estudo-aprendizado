// Importando os arquivos que vou utilizar, pela forma das importações estou utilizando barris
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Observa-se aqui um decorator, meus componentes, que são:
    // * O seletor: que identifica o componente. O seletor é o nome que eu atribui ao componente do Angular, quando cliquei com o botão direito na pasta app e usei o Angular Generator que é renderizado como um elemento HTML na página.Por convenção, os seletores de componentes angulares começam com o prefixo app-, seguido pelo nome do componente.
    // * O templateUrl: é a referência ao meu arquivo HTML.
    // * O meu styleUrls: se refere aos meus estilos das páginas.
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product;
  //  Isso permite que o componente de alerta do produto emita um evento quando o valor da propriedade de notificação é alterado. 
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}