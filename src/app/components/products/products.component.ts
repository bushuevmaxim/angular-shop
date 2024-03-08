import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/services/products/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  static routeName: string = 'products/:category';

  productService: ProductsService;
  products$: Observable<Product[]> | undefined;

  category: string = 'all';

  constructor(productService: ProductsService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    this.productService = productService;
  }


  ngOnInit(): void {

    this.products$ = this.productService.fetchProducts(this.category);


    this.route.params.subscribe(params => {
      this.category = params['category'];
      console.log(this.category);
      this.products$ = this.productService.fetchProducts(this.category);
      this.cdr.markForCheck();
    });
  }


}
