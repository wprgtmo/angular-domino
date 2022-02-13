import { PublicidadPageComponent } from './publicidad/publicidad-page/publicidad-page.component';
import { DispositivoPagesComponent } from './dispositivo/dispositivo-pages/dispositivo-pages.component';
import { AdminModule } from './../../common/shared/admin.module';
import { MaterialModule } from '../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminPagesRoutingModule } from './admin-pages-routing.module';
import { DashboardModule } from 'src/app/common/shared/dashboard.module';


import { UsuarioPagesComponent } from './usuario/usuario-pages/usuario-pages.component';
import { GrupoPagesComponent } from './grupo/grupo-pages/grupo-pages.component';


@NgModule({
  declarations: [
    UsuarioPagesComponent,
    GrupoPagesComponent,
    DispositivoPagesComponent,
    PublicidadPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminPagesRoutingModule,
    DashboardModule,
    ReactiveFormsModule,
    AdminModule
  ]
})
export class AdminPagesModule { }
