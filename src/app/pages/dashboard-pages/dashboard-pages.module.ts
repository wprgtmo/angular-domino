import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPagesRoutingModule } from './dashboard-pages-routing.module';
import { DashboardModule } from 'src/app/common/shared/dashboard.module';
import { EventoPageComponent } from './evento-page/evento-page.component';
import { JugadorPageComponent } from './jugador-page/jugador-page.component';
import { EventoAddPageComponent } from './evento-add-page/evento-add-page.component';



@NgModule({
  declarations: [
    EventoPageComponent,
    JugadorPageComponent,
    EventoAddPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardPagesRoutingModule,
    DashboardModule
  ]
})
export class DashboardPagesModule { }
