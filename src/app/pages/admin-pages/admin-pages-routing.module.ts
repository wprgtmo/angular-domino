import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from '../../common/components/general/nav/nav.component';


import { UsuarioPagesComponent } from './usuario/usuario-pages/usuario-pages.component';
import { GrupoPagesComponent } from './grupo/grupo-pages/grupo-pages.component';
import { DispositivoPagesComponent } from './dispositivo/dispositivo-pages/dispositivo-pages.component';
import { PublicidadPageComponent } from './publicidad/publicidad-page/publicidad-page.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children:[
        {
          path: '',
          component: UsuarioPagesComponent
        },
        {
          path: 'publicidad',
          component: PublicidadPageComponent
        },
        {
          path: 'usuario',
          component: UsuarioPagesComponent
        },
        {
          path: 'grupo',
          component: GrupoPagesComponent
        },
        {
          path: 'dispositivo',
          component: DispositivoPagesComponent
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule { }
