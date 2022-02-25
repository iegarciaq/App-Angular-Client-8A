import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { OverviewClientsComponent } from './pages/overview-clients/overview-clients.component';


@NgModule({
  declarations: [
    OverviewClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
