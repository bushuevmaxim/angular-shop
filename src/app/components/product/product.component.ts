import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from 'src/app/services/products/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  ,
})
export class ProductComponent {
  @Input() product: Product | undefined;
}