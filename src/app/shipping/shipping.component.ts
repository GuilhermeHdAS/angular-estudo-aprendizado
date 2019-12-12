import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;

  // pegando os serviços do meu carrinho de compras
  constructor( private cartService: CartService) { }

  // Pegando as informações que meu serviço pode me oferecer
  ngOnInit() {
    this.shippingCosts = this.cartService.getRemessaDePrecos();
  }

}