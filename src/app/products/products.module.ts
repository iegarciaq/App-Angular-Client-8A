import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { OverviewProductsComponent } from './pages/overview-products/overview-products.component';
import { TableComponent } from './components/table/table.component';
import { MaterialComponentsModule } from '../material-components.module';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';

import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    OverviewProductsComponent,
    TableComponent,
    AddDialogComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialComponentsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
