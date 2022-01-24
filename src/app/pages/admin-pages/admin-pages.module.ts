import { UsuarioPagesComponent } from './usuario/usuario-pages/usuario-pages.component';
import { MaterialModule } from '../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminPagesRoutingModule } from './admin-pages-routing.module';
import { DashboardModule } from 'src/app/common/shared/dashboard.module';




@NgModule({
  declarations: [
    UsuarioPagesComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminPagesRoutingModule,
    DashboardModule,
    ReactiveFormsModule,
  ]
})
export class AdminPagesModule { }
