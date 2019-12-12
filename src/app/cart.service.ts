import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// O que acontece aqui, eu estou oferecendo um serviço, no caso o carrinho de compras. 
@Injectable({
  providedIn: 'root'
})
export class CartService {

  // defina uma itemspropriedade para armazenar a lista (matriz) dos produtos atuais no carrinho
  items = [];

  constructor(private http: HttpClient) {}

  // Adiciona um produto na lista que armazenará os produtos dos carrinhos
  addNoCarrinho(product){
    this.items.push (product);
  }

  // retorna os itens do carrinho
  getItems(){
    return this.items;
  }

  // retira os itens do carrinho
  limparCarrinho(){
    this.items = [];
    return this.items;
  }

  // Pega os dados do meu arquivo JSON com as infromações que preciso sobre entrega
  getRemessaDePrecos(){
    return this.http.get('/assets/shipping.json');
  }

}