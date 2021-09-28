import { NavComponent } from './../../common/components/nav/nav.component';
import { JugadorPageComponent } from './jugador-page/jugador-page.component';
import { EventoPageComponent } from './evento-page/evento-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children:[
        {
          path: 'eventos',
          component: EventoPageComponent
        },
        {
          path: 'jugadores',
          component: JugadorPageComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPagesRoutingModule { }
