
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsCategoryComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) { }
  ngOnDestroy(): void {
    console.log('ngOnDestroy ProductsCategoryComponent');

  }

  static routeName: string = 'category/:name';

  category: string | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['name'];
      console.log(this.category);

    });
  }

}
