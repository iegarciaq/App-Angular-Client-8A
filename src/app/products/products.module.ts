import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { OverviewProductsComponent } from './pages/overview-products/overview-products.component';
import { TableComponent } from './components/table/table.component';
import { MaterialComponentsModule } from '../material-components.module';

@NgModule({
  declarations: [
    OverviewProductsComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialComponentsModule
  ]
})
export class ProductsModule { }
