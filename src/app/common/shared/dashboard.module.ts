import { MaterialModule } from './../../material.module';
import { NavComponent } from './../components/nav/nav.component';
import { JugadorComponent } from './../components/jugador/jugador.component';
import { EventoComponent } from './../components/evento/evento.component';
import { MenuComponent } from './../components/menu/menu.component';
import { HeaderComponent } from './../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HeaderComponent, MenuComponent, EventoComponent, JugadorComponent, NavComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderComponent, MenuComponent, EventoComponent, JugadorComponent, NavComponent]
})
export class DashboardModule { }
