import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/services/products/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnChanges {

  productService: ProductsService;
  products$: Observable<Product[]> | undefined;

  @Input() category: string | undefined;

  constructor(productService: ProductsService) {
    this.productService = productService;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['category'].currentValue);

  }
  ngDoCheck(): void {
    console.log('ngDoCheck');

  }
  ngOnInit(): void {

    this.products$ = this.productService.fetchProducts(this.category);
  }


}
