import { Component, OnInit } from '@angular/core';

export interface Product {
  quantity: number;
  description: string;
  price: number;
}

@Component({
  selector: 'app-crea-fattura-prodotti',
  templateUrl: './crea-fattura-prodotti.component.html',
  styleUrls: ['./crea-fattura-prodotti.component.css']
})
export class CreaFatturaProdottiComponent implements OnInit {

  products: Product[] = [
    {
      quantity: 1,
      description: "Primo + Contorno",
      price: 9
    },
    {
      quantity: 2,
      description: "Completo",
      price: 12
    },
    {
      quantity: 1,
      description: "Secondo + Contorno",
      price: 10
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
