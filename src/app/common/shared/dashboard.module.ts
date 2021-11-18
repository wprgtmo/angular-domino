import { ParejaAddComponent } from '../components/pareja/operaciones/pareja-add/pareja-add.component';
import { EventoAddComponent } from './../components/evento/operaciones/evento-add/evento-add.component';
import { EventoDetailsComponent } from './../components/evento/operaciones/evento-details/evento-details.component';
import { ParejaToolbarComponent } from '../components/pareja/toolbar/pareja-toolbar/pareja-toolbar.component';
import { ParejaComponent } from './../components/pareja/pareja.component';
import { MesaToolbarComponent } from './../components/mesa/mesa-toolbar/mesa-toolbar.component';
import { BoletaComponent } from './../components/ronda/boleta/boleta.component';
import { MesaComponent } from './../components/mesa/mesa.component';
import { EventoToolbarComponent } from '../components/evento/toolbars/evento-toolbar/evento-toolbar.component';
import { EventoDetailsToolbarComponent } from '../components/evento/toolbars/evento-details-toolbar/evento-details-toolbar.component';
import { MaterialModule } from './../../material.module';
import { NavComponent } from './../components/nav/nav.component';
import { JugadorComponent } from './../components/jugador/jugador.component';
import { EventoComponent } from './../components/evento/evento.component';
import { MenuComponent } from './../components/menu/menu.component';
import { HeaderComponent } from './../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JugadorToolbarComponent } from '../components/jugador/jugador-toolbar/jugador-toolbar.component';
import { RondaComponent } from '../components/ronda/ronda.component';
import { RondaToolbarComponent } from '../components/ronda/ronda-toolbar/ronda-toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    EventoComponent,
    JugadorComponent,
    NavComponent,
    EventoToolbarComponent,
    EventoDetailsToolbarComponent,
    JugadorToolbarComponent,
    RondaComponent,
    RondaToolbarComponent,
    MesaComponent,
    BoletaComponent,
    MesaToolbarComponent,
    ParejaComponent,
    ParejaToolbarComponent,
    EventoDetailsComponent,
    EventoAddComponent,
    ParejaAddComponent
  ],

  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    MenuComponent,
    EventoComponent,
    JugadorComponent,
    NavComponent,
    EventoToolbarComponent,
    EventoDetailsToolbarComponent,
    JugadorToolbarComponent,
    RondaComponent,
    RondaToolbarComponent,
    MesaComponent,
    BoletaComponent,
    MesaToolbarComponent,
    ParejaComponent,
    ParejaToolbarComponent,
    EventoDetailsComponent,
    EventoAddComponent,
    ParejaAddComponent
  ],
})
export class DashboardModule {}
