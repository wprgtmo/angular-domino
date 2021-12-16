import { CargandoComponent } from './../components/cargando/cargando.component';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './../components/nav/nav.component';
import { HeaderComponent } from './../components/header/header.component';
import { MenuComponent } from './../components/menu/menu.component';

import { EventoComponent } from './../components/evento/evento.component';
import { EventoToolbarComponent } from '../components/evento/toolbars/evento-toolbar/evento-toolbar.component';
import { EventoDetailsToolbarComponent } from '../components/evento/toolbars/evento-details-toolbar/evento-details-toolbar.component';
import { EventoDetailsComponent } from './../components/evento/operaciones/evento-details/evento-details.component';
import { EventoAddComponent } from './../components/evento/operaciones/evento-add/evento-add.component';
import { EventoEditComponent } from './../components/evento/operaciones/evento-edit/evento-edit.component';


import { ParejaComponent } from './../components/pareja/pareja.component';
import { ParejaToolbarComponent } from '../components/pareja/toolbar/pareja-toolbar/pareja-toolbar.component';
import { ParejaAddComponent } from '../components/pareja/operaciones/pareja-add/pareja-add.component';

import { MesaComponent } from './../components/mesa/mesa.component';
import { MesaToolbarComponent } from './../components/mesa/mesa-toolbar/mesa-toolbar.component';

import { BoletaComponent } from './../components/ronda/boleta/boleta.component';

import { JugadorComponent } from './../components/jugador/jugador.component';
import { JugadorToolbarComponent } from '../components/jugador/toolbar/jugador-toolbar/jugador-toolbar.component';
import { JugadorToolbarDetailsComponent } from '../components/jugador/toolbar/jugador-toolbar-details/jugador-toolbar-details.component';
import { JugadorDetailsComponent } from '../components/jugador/operaciones/jugador-details/jugador-details.component';
import { JugadorAddComponent } from './../components/jugador/operaciones/jugador-add/jugador-add.component';
import { JugadorEditComponent } from './../components/jugador/operaciones/jugador-edit/jugador-edit.component';

import { RondaComponent } from '../components/ronda/ronda.component';
import { RondaToolbarComponent } from '../components/ronda/ronda-toolbar/ronda-toolbar.component';

import { EstadisticaComponent } from '../components/estadistica/estadistica.component';
import { EstadisticaToolbarComponent } from './../components/estadistica/toolbar/estadistica-toolbar/estadistica-toolbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    NavComponent,

    EventoComponent,
    EventoToolbarComponent,
    EventoDetailsToolbarComponent,
    EventoDetailsComponent,
    EventoAddComponent,
    EventoEditComponent,

    JugadorComponent,
    JugadorToolbarComponent,
    JugadorToolbarDetailsComponent,
    JugadorDetailsComponent,
    JugadorAddComponent,
    JugadorEditComponent,

    RondaComponent,
    RondaToolbarComponent,

    MesaComponent,
    MesaToolbarComponent,

    BoletaComponent,

    ParejaComponent,
    ParejaToolbarComponent,
    ParejaAddComponent,

    EstadisticaComponent,
    EstadisticaToolbarComponent,
    
    CargandoComponent
  ],

  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    MenuComponent,
    NavComponent,

    EventoComponent,
    EventoToolbarComponent,
    EventoDetailsToolbarComponent,
    EventoDetailsComponent,
    EventoAddComponent,
    EventoEditComponent,

    JugadorComponent,
    JugadorToolbarComponent,
    JugadorToolbarDetailsComponent,
    JugadorDetailsComponent,
    JugadorAddComponent,
    JugadorEditComponent,

    RondaComponent,
    RondaToolbarComponent,

    MesaComponent,
    MesaToolbarComponent,

    BoletaComponent,

    ParejaComponent,
    ParejaToolbarComponent,
    ParejaAddComponent,

    EstadisticaComponent,
    EstadisticaToolbarComponent,

    CargandoComponent
  ],
})
export class DashboardModule {}
