import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { QueryService } from '../../services/query.service';
import { QueryParams } from '../../interfaces/queryParams';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductCardComponent } from '../../components/product-card/product-card/product-card.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  imports: [CommonModule, IonicModule, ProductCardComponent, SideBarComponent],
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent  implements OnInit {

  public productsList: Product[] = [];
  private productService: ProductService = inject(ProductService);
  private queryService: QueryService = inject(QueryService);
  private filterSubscription!: Subscription;

  ngOnInit(): void {
    this.filterSubscription = this.queryService.currentFilters$.subscribe((filters) => {
      this.getProducts(filters);
    });
  }
  ngOnDestroy(): void {
    this.filterSubscription?.unsubscribe();
  }
  getProducts(filter: QueryParams): void {
    try {
      this.productsList = [];
      this.productService.getProducts(filter).then((products) => {
        console.log(products);
        for (let i = 0; i < products.length; i++) {
          this.productsList.push(products[i]);
        }
        if (this.productsList.length === 0){
          console.log("No se encontraron productos");
        }
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
  onProductSelected(product: Product): void {
    console.log('Producto seleccionado:', product);
  }

}
