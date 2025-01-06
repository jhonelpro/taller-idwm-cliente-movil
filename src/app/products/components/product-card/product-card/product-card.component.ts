import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Product } from 'src/app/products/interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  imports: [CommonModule, IonicModule],
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent{

  @Input() product: Product;
  @Output() productSelected = new EventEmitter<Product>(); 

  showMessage = false;  

  constructor() {
    
    this.product = {
      id: 0,
      name: '',
      price: 0,
      stock: 0,
      imageUrl: '',
      productType: { id: 0, name: '' }
    };
  }

}
