import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardPagesRoutingModule } from './dashboard-pages-routing.module';
import { DashboardModule } from 'src/app/common/shared/dashboard.module';

import { EventoPageComponent } from './evento/evento-page/evento-page.component';
import { EventoAddPageComponent } from './evento/evento-add-page/evento-add-page.component';
import { EventoListPageComponent } from './evento/evento-list-page/evento-list-page.component';
import { EventoDetailsPageComponent } from './evento/evento-details-page/evento-details-page.component';

import { JugadorPageComponent } from './jugador/jugador-page/jugador-page.component';
import { JugadorAddPageComponent } from './jugador/jugador-add-page/jugador-add-page.component';
import { JugadorDetailPageComponent } from './jugador/jugador-detail-page/jugador-detail-page.component';
import { JugadorListPageComponent } from './jugador/jugador-list-page/jugador-list-page.component';

import { ArbitroPageComponent } from './arbitro/arbitro-page/arbitro-page.component';

import { RondaPageComponent } from './ronda/ronda-page/ronda-page.component';
import { MesaPageComponent } from './mesa-page/mesa-page.component';

import { ParejaPageComponent } from './pareja/pareja-page/pareja-page.component';
import { ParejaAddPageComponent } from './pareja/pareja-add-page/pareja-add-page.component';
import { ParejaEditPageComponent } from './pareja/pareja-edit-page/pareja-edit-page.component';
import { ParejaListPageComponent } from './pareja/pareja-list-page/pareja-list-page.component';

import { EstadisticaPageComponent } from './estadistica/estadistica-page/estadistica-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent,

    EventoPageComponent,
    EventoAddPageComponent,
    EventoListPageComponent,
    EventoDetailsPageComponent,

    JugadorPageComponent,
    JugadorAddPageComponent,
    JugadorListPageComponent,
    JugadorDetailPageComponent,

    ArbitroPageComponent,

    RondaPageComponent,
    MesaPageComponent,

    ParejaPageComponent,
    ParejaAddPageComponent,
    ParejaListPageComponent,
    ParejaEditPageComponent,

    EstadisticaPageComponent
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
