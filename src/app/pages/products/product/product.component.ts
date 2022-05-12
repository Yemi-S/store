import { Component, Input, OnInit, Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent{
  @Input() product!:Product
  @Output() addToCartClick = new EventEmitter<Product>(); 

  onClick(): void{
    this.addToCartClick.emit(this.product);
  }

}