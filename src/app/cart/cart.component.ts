import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'

// Observa-se aqui um decorator, meus componentes, que são:
    // * O seletor: que identifica o componente. O seletor é o nome que eu atribui ao componente do Angular, quando cliquei com o botão direito na pasta app e usei o Angular Generator que é renderizado como um elemento HTML na página.Por convenção, os seletores de componentes angulares começam com o prefixo app-, seguido pelo nome do componente.
    // * O templateUrl: é a referência ao meu arquivo HTML.
    // * O meu styleUrls: se refere aos meus estilos das páginas.
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}