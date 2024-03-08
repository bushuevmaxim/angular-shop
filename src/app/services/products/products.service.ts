import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Product } from './models/product';
import { merge } from 'rxjs';


enum Endpoints {
  Products = 'products',
  Categories = 'products/category/'
}

enum CategoryType {
  jewelery = 'jewelery',
  electronics = 'electronics',
  women = "women's clothing",
  men = "men's clothing",
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'https://fakestoreapi.com/';
  constructor(private http: HttpClient) {

  }

  fetchProducts(category: string) {
    console.log('fetchProducts');
    let products;
    if (category != 'all') {
      products = this.http.get<Product[]>(`${this.baseUrl}${Endpoints.Categories + category}`)

    }
    else {
      products = this.http.get<Product[]>(`${this.baseUrl}${Endpoints.Products}`)
    }
    console.log('all');


    console.log(products);

    return products;
  }
  fetchCategories() {
    let categories = this.http.get<String[]>(`${this.baseUrl}${Endpoints.Categories}`)
    return categories;
  }
}
