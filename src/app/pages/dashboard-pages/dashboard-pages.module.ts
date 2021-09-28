import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPagesRoutingModule } from './dashboard-pages-routing.module';
import { DashboardModule } from 'src/app/common/shared/dashboard.module';
import { EventoPageComponent } from './evento-page/evento-page.component';
import { JugadorPageComponent } from './jugador-page/jugador-page.component';



@NgModule({
  declarations: [
    EventoPageComponent,
    JugadorPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardPagesRoutingModule,
    DashboardModule
  ]
})
export class DashboardPagesModule { }
