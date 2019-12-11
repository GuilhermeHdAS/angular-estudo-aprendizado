import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  // O ActivatedRoute contém as informações sobre a rota que será feita, seus parâmetros e dados adicionais
  constructor(private route: ActivatedRoute) { }

  // Esta rota vai pegar todos os parâmetros necessário (obrigatórios e opcionais) da rota pelo paramMap, ele pode pegar um único valor de rota usando get() ou mais valores usando o getAll(). 
  // subscribe: é um observável, observáveis ​​fornecem suporte para a transmissão de mensagens entre editores e assinantes em seu aplicativo. Observables oferecem benefícios significativos em relação a outras técnicas para manipulação de eventos, programação assíncrona e manipulação de vários valores.  A função subscribe define como obter ou gerar valores ou mensagens a serem publicadas.
  // O que o subscribe vai fazer aqui, ele vai se inscrever e obter os produtos do productId
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}