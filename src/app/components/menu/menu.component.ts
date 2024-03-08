import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() isSidebarShown: boolean = true;
  productsService: ProductsService;
  categories$: Observable<String[]> | undefined;
  constructor(productsService: ProductsService) {
    this.productsService = productsService;
  }
  ngOnInit(): void {
    this.categories$ = this.productsService.fetchCategories();
  }



}
