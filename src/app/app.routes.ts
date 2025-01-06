import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from './products/pages/product/product.component';
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {
        path: 'products',
        component: ProductComponent,

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }