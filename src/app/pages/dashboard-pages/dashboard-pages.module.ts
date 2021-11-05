import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPagesRoutingModule } from './dashboard-pages-routing.module';
import { DashboardModule } from 'src/app/common/shared/dashboard.module';
import { EventoPageComponent } from './evento-page/evento-page.component';
import { JugadorPageComponent } from './jugador-page/jugador-page.component';
import { EventoAddPageComponent } from './evento-add-page/evento-add-page.component';
import { EventoListPageComponent } from './evento-list-page/evento-list-page.component';
import { JugadorAddPageComponent } from './jugador-add-page/jugador-add-page.component';
import { JugadorListPageComponent } from './jugador-list-page/jugador-list-page.component';
import { EventoDetailsPageComponent } from './evento-details-page/evento-details-page.component';
import { RondaPageComponent } from './ronda-page/ronda-page.component';
import { MesaPageComponent } from './mesa-page/mesa-page.component';
import { ParejaPageComponent } from './pareja-page/pareja-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParejaAddPageComponent } from './pareja-add-page/pareja-add-page.component';



@NgModule({
  declarations: [
    EventoPageComponent,
    JugadorPageComponent,
    EventoAddPageComponent,
    EventoListPageComponent,
    JugadorAddPageComponent,
    JugadorListPageComponent,
    EventoDetailsPageComponent,
    RondaPageComponent,
    MesaPageComponent,
    ParejaPageComponent,
    ParejaAddPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardPagesRoutingModule,
    DashboardModule,
    ReactiveFormsModule,
  ]
})
export class DashboardPagesModule { }
