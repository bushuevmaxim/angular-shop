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
  clothing = 'clothing',
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'https://fakestoreapi.com/';
  constructor(private http: HttpClient) {

  }

  fetchProducts(category: string | undefined) {
    console.log('fetchProducts');

    if (category != undefined) {
      if (category == 'clothing') {
        let menProducts = this.http.get<Product[]>(`${this.baseUrl}${Endpoints.Categories + CategoryType.men}`)
        let womenProducts = this.http.get<Product[]>(`${this.baseUrl}${Endpoints.Categories + CategoryType.women}`)
        return merge(menProducts, womenProducts);
      }
      else {
        let products = this.http.get<Product[]>(`${this.baseUrl}${Endpoints.Categories + category}`)
        return products;
      }


    }
    let products = this.http.get<Product[]>(`${this.baseUrl}${Endpoints.Products}`)
    console.log(products);

    return products;
  }
  fetchCategories() {
    let categories = this.http.get<String[]>(`${this.baseUrl}${Endpoints.Categories}`)
    return categories;
  }
}
