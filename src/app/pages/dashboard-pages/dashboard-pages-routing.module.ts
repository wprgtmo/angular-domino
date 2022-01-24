import { JugadorDetailPageComponent } from './jugador/jugador-detail-page/jugador-detail-page.component';
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
import { EstadisticaPageComponent } from './estadistica/estadistica-page/estadistica-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { PublicidadPageComponent } from '../admin-pages/publicidad/publicidad-page/publicidad-page.component';
import { ArbitroPageComponent } from './arbitro/arbitro-page/arbitro-page.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children:[
        {
          path: '',
          component: HomePageComponent
        },
        {
          path: 'home',
          component: HomePageComponent
        },
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
          path: 'playersCard',
          component: JugadorPageComponent
        },
        {
          path: 'playerAdd',
          component: JugadorAddPageComponent
        },
        {
          path: 'playersList',
          component: JugadorListPageComponent
        },
        {
          path: 'playerDetails',
          component: JugadorDetailPageComponent
        },
        {
          path: 'estadistica',
          component: EstadisticaPageComponent
        },
        {
          path: 'arbitro',
          component: ArbitroPageComponent
        },
        {
          path: 'publicidad',
          component: PublicidadPageComponent
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPagesRoutingModule { }
