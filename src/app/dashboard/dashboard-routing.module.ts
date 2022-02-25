import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewClientsComponent } from '../clients/pages/overview-clients/overview-clients.component';
import { OverviewProductsComponent } from '../products/pages/overview-products/overview-products.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    {
      path: 'products',
      component: OverviewProductsComponent
    },
    {
      path: 'clients',
      component: OverviewClientsComponent
    },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
