import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from '../components/general/menu/menu.component';
import { SubmenuComponent } from './../components/general/submenu/submenu.component';
import { NavComponent } from '../components/general/nav/nav.component';

import { EventoComponent } from './../components/evento/evento.component';
import { EventoToolbarComponent } from '../components/evento/toolbars/evento-toolbar/evento-toolbar.component';
import { EventoDetailsToolbarComponent } from '../components/evento/toolbars/evento-details-toolbar/evento-details-toolbar.component';
import { EventoDetailsComponent } from './../components/evento/operaciones/evento-details/evento-details.component';
import { EventoAddComponent } from './../components/evento/operaciones/evento-add/evento-add.component';
import { EventoEditComponent } from './../components/evento/operaciones/evento-edit/evento-edit.component';


import { ParejaAddComponent } from '../components/evento/detalles/pareja/operaciones/pareja-add/pareja-add.component';

import { MesaComponent } from '../components/evento/detalles/mesa/mesa/mesa.component';
import { MesaToolbarComponent } from '../components/evento/detalles/mesa/mesa-toolbar/mesa-toolbar.component';

import { BoletaComponent } from '../components/evento/detalles/ronda/boleta/boleta.component';

import { JugadorComponent } from './../components/jugador/jugador.component';
import { JugadorToolbarComponent } from '../components/jugador/toolbar/jugador-toolbar/jugador-toolbar.component';
import { JugadorToolbarDetailsComponent } from '../components/jugador/toolbar/jugador-toolbar-details/jugador-toolbar-details.component';
import { JugadorDetailsComponent } from '../components/jugador/operaciones/jugador-details/jugador-details.component';
import { JugadorAddComponent } from './../components/jugador/operaciones/jugador-add/jugador-add.component';
import { JugadorEditComponent } from './../components/jugador/operaciones/jugador-edit/jugador-edit.component';

import { RondaComponent } from '../components/evento/detalles/ronda/ronda/ronda.component';
import { RondaToolbarComponent } from '../components/evento/detalles/ronda/ronda-toolbar/ronda-toolbar.component';

import { PublicidadVideoComponent } from './../components/publicidad/publicidad-video/publicidad-video.component';
import { PublicidadImagenComponent } from './../components/publicidad/publicidad-imagen/publicidad-imagen.component';

import { EstadisticaComponent } from '../components/estadistica/estadistica.component';
import { EstadisticaToolbarComponent } from './../components/estadistica/toolbar/estadistica-toolbar/estadistica-toolbar.component';
import { ParejaComponent } from '../components/evento/detalles/pareja/pareja/pareja.component';
import { ParejaToolbarComponent } from '../components/evento/detalles/pareja/toolbar/pareja-toolbar/pareja-toolbar.component';

import { ArbitroToolbarDetailsComponent } from './../components/arbitro/toolbar/arbitro-toolbar-details/arbitro-toolbar-details.component';
import { ArbitroToolbarComponent } from './../components/arbitro/toolbar/arbitro-toolbar/arbitro-toolbar.component';
import { ArbitroEditComponent } from './../components/arbitro/operaciones/arbitro-edit/arbitro-edit.component';
import { ArbitroDetailsComponent } from './../components/arbitro/operaciones/arbitro-details/arbitro-details.component';
import { ArbitroAddComponent } from './../components/arbitro/operaciones/arbitro-add/arbitro-add.component';
import { ArbitroComponent } from '../components/arbitro/arbitro/arbitro.component';

import { CargandoComponent } from './../components/general/cargando/cargando.component';

@NgModule({
  declarations: [
    MenuComponent,
    SubmenuComponent,
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

    PublicidadImagenComponent,
    PublicidadVideoComponent,

    ArbitroComponent,
    ArbitroAddComponent,
    ArbitroEditComponent,
    ArbitroDetailsComponent,
    ArbitroToolbarComponent,
    ArbitroToolbarDetailsComponent,

    CargandoComponent,
  ],

  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  exports: [
    MenuComponent,
    SubmenuComponent,
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

    PublicidadImagenComponent,
    PublicidadVideoComponent,

    ArbitroComponent,
    ArbitroAddComponent,
    ArbitroEditComponent,
    ArbitroDetailsComponent,
    ArbitroToolbarComponent,
    ArbitroToolbarDetailsComponent,

    CargandoComponent,
  ],
})
export class DashboardModule {}
