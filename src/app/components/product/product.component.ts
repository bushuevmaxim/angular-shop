import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product | undefined;
}


export class Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  constructor(id: number, title: string, image: string, description: string, price: number) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
    this.price = price;
  }
}
export const productList: Product[] = [
  new Product(1, 'Product 1', 'https://static.insales-cdn.com/r/ttB2kq1h-k4/rs:fit:1000:0:1/q:100/plain/images/products/1/6171/690878491/%D1%85%D1%83%D0%B4%D0%B8_500_%D1%87%D0%B5%D1%80%D0%BD.jpg', 'Description of Product 1', 100),
  new Product(2, 'Product 2', 'https://static.insales-cdn.com/r/ttB2kq1h-k4/rs:fit:1000:0:1/q:100/plain/images/products/1/6171/690878491/%D1%85%D1%83%D0%B4%D0%B8_500_%D1%87%D0%B5%D1%80%D0%BD.jpg', 'Description of Product 2', 150),
  new Product(3, 'Product 3', 'https://static.insales-cdn.com/r/ttB2kq1h-k4/rs:fit:1000:0:1/q:100/plain/images/products/1/6171/690878491/%D1%85%D1%83%D0%B4%D0%B8_500_%D1%87%D0%B5%D1%80%D0%BD.jpg', 'Description of Product 3', 120),
  new Product(4, 'Product 4', 'https://static.insales-cdn.com/r/ttB2kq1h-k4/rs:fit:1000:0:1/q:100/plain/images/products/1/6171/690878491/%D1%85%D1%83%D0%B4%D0%B8_500_%D1%87%D0%B5%D1%80%D0%BD.jpg', 'Description of Product 4', 90),
  new Product(5, 'Product 5', 'https://static.insales-cdn.com/r/ttB2kq1h-k4/rs:fit:1000:0:1/q:100/plain/images/products/1/6171/690878491/%D1%85%D1%83%D0%B4%D0%B8_500_%D1%87%D0%B5%D1%80%D0%BD.jpg', 'Description of Product 5', 200),
  new Product(6, 'Product 6', 'https://static.insales-cdn.com/r/ttB2kq1h-k4/rs:fit:1000:0:1/q:100/plain/images/products/1/6171/690878491/%D1%85%D1%83%D0%B4%D0%B8_500_%D1%87%D0%B5%D1%80%D0%BD.jpg', 'Description of Product 6', 80),
  new Product(7, 'Product 7', 'https://static.insales-cdn.com/r/ttB2kq1h-k4/rs:fit:1000:0:1/q:100/plain/images/products/1/6171/690878491/%D1%85%D1%83%D0%B4%D0%B8_500_%D1%87%D0%B5%D1%80%D0%BD.jpg', 'Description of Product 7', 110),
  new Product(8, 'Product 8', 'https://static.insales-cdn.com/r/ttB2kq1h-k4/rs:fit:1000:0:1/q:100/plain/images/products/1/6171/690878491/%D1%85%D1%83%D0%B4%D0%B8_500_%D1%87%D0%B5%D1%80%D0%BD.jpg', 'Description of Product 8', 130),
  new Product(9, 'Product 9', 'https://static.insales-cdn.com/r/ttB2kq1h-k4/rs:fit:1000:0:1/q:100/plain/images/products/1/6171/690878491/%D1%85%D1%83%D0%B4%D0%B8_500_%D1%87%D0%B5%D1%80%D0%BD.jpg', 'Description of Product 9', 170),
  new Product(10, 'Product 10', 'https://static.insales-cdn.com/r/ttB2kq1h-k4/rs:fit:1000:0:1/q:100/plain/images/products/1/6171/690878491/%D1%85%D1%83%D0%B4%D0%B8_500_%D1%87%D0%B5%D1%80%D0%BD.jpg', 'Description of Product 10', 140),
];