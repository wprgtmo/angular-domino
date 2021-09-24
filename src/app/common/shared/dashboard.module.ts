import { JugadorComponent } from './../components/jugador/jugador.component';
import { EventoComponent } from './../components/evento/evento.component';
import { MenuComponent } from './../components/menu/menu.component';
import { HeaderComponent } from './../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HeaderComponent, MenuComponent, EventoComponent, JugadorComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, MenuComponent, EventoComponent, JugadorComponent]
})
export class DashboardModule { }
