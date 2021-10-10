import { EventoToolbarComponent } from './../components/evento/evento-toolbar/evento-toolbar.component';
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



@NgModule({
  declarations: [HeaderComponent, MenuComponent, EventoComponent, JugadorComponent, NavComponent, EventoToolbarComponent, JugadorToolbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [HeaderComponent, MenuComponent, EventoComponent, JugadorComponent, NavComponent, EventoToolbarComponent, JugadorToolbarComponent]
})
export class DashboardModule { }
