import { ParejaListPageComponent } from './pareja/pareja-list-page/pareja-list-page.component';
import { ParejaAddPageComponent } from './pareja/pareja-add-page/pareja-add-page.component';
import { ParejaPageComponent } from './pareja/pareja-page/pareja-page.component';
import { MesaPageComponent } from './mesa-page/mesa-page.component';
import { RondaPageComponent } from './ronda/ronda-page/ronda-page.component';
import { EventoDetailsPageComponent } from './evento/evento-details-page/evento-details-page.component';
import { NavComponent } from './../../common/components/nav/nav.component';
import { JugadorPageComponent } from './jugador/jugador-page/jugador-page.component';
import { EventoPageComponent } from './evento/evento-page/evento-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoAddPageComponent } from './evento/evento-add-page/evento-add-page.component';
import { EventoListPageComponent } from './evento/evento-list-page/evento-list-page.component';
import { JugadorAddPageComponent } from './jugador/jugador-add-page/jugador-add-page.component';
import { JugadorListPageComponent } from './jugador/jugador-list-page/jugador-list-page.component';
import { ParejaEditPageComponent } from './pareja/pareja-edit-page/pareja-edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children:[
        {
          path: 'eventsCard',
          component: EventoPageComponent
        },
        {
          path: 'eventNew',
          component: EventoAddPageComponent
        },
        {
          path: 'eventsList',
          component: EventoListPageComponent
        },
        {
          path: 'eventDetails',
          component: EventoDetailsPageComponent
        },
        {
          path: 'rondas',
          component: RondaPageComponent
        },
        {
          path: 'parejas',
          component: ParejaPageComponent
        },
        {
          path: 'parejaAdd',
          component: ParejaAddPageComponent
        },
        {
          path: 'parejaList',
          component: ParejaListPageComponent
        },
        {
          path: 'parejaEdit',
          component: ParejaEditPageComponent
        },
        {
          path: 'mesas',
          component: MesaPageComponent
        },
        {
          path: 'jugadores',
          component: JugadorPageComponent
        },
        {
          path: 'jugador_nuevo',
          component: JugadorAddPageComponent
        },
        {
          path: 'jugador_lista',
          component: JugadorListPageComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPagesRoutingModule { }
