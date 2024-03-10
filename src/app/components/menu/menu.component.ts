import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  @Input() isSidebarShown: boolean = true;
  productsService: ProductsService;
  categories$: Observable<String[]> | undefined;

  show: boolean = false;
  constructor(productsService: ProductsService) {
    this.productsService = productsService;
  }
  ngOnInit(): void {
    this.categories$ = this.productsService.fetchCategories();
  }

  openSubMenu(menuTrigger: MatMenuTrigger) {

    menuTrigger.openMenu();


  }

}

