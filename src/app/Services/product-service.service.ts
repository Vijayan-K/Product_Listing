import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

 products : any =[
    { id: 1, name : 'Laptop', price : 50000 },
    { id: 2, name : 'Mobile', price:  25000 },
    { id: 3, name: 'Headphones', price: 2000 },
    { id: 4, name: 'Monitor', price: 8000 },
    { id: 5, name: 'Keyboard', price: 1200 },
    { id: 6, name: 'Mouse', price: 600 },
    { id: 7, name: 'Speaker', price: 3000 },
    { id: 8, name: 'Printer', price: 7000 },
    { id: 9, name: 'Camera', price: 25000 },
    { id: 10, name: 'Tablet', price: 20000 },
    { id: 11, name: 'Smartwatch', price: 7000 },
    { id: 12, name: 'Hard Disk', price: 4000 }

  ];

  GetProduct(){
    return this.products;
  }



}
