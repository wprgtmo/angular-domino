import { EventoDetailsPageComponent } from './../../pages/dashboard-pages/evento-details-page/evento-details-page.component';
import { EventoToolbarComponent } from './../components/evento/evento-toolbar/evento-toolbar.component';
import { EventoDetailsToolbarComponent } from './../components/evento/evento-details-toolbar/evento-details-toolbar.component';
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
    RondaToolbarComponent
  ],

  imports: [CommonModule, RouterModule, MaterialModule],
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
    RondaToolbarComponent
  ],
})
export class DashboardModule {}
