import { MaterialModule } from '../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioComponent } from './../components/admin/usuario/usuario/usuario.component';
import { UsuarioAddComponent } from './../components/admin/usuario/operaciones/usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './../components/admin/usuario/operaciones/usuario-edit/usuario-edit.component';
import { UsuarioDetailsComponent } from './../components/admin/usuario/operaciones/usuario-details/usuario-details.component';
import { UsuarioToolbarComponent } from './../components/admin/usuario/toolbar/usuario-toolbar/usuario-toolbar.component';
import { UsuarioToolbarDetailsComponent } from './../components/admin/usuario/toolbar/usuario-toolbar-details/usuario-toolbar-details.component';

import { GrupoComponent } from './../components/admin/grupo/grupo/grupo.component';
import { GrupoAddComponent } from './../components/admin/grupo/operaciones/grupo-add/grupo-add.component';
import { GrupoEditComponent } from './../components/admin/grupo/operaciones/grupo-edit/grupo-edit.component';
import { GrupoDetailsComponent } from './../components/admin/grupo/operaciones/grupo-details/grupo-details.component';
import { GrupoToolbarComponent } from './../components/admin/grupo/toolbar/grupo-toolbar/grupo-toolbar.component';
import { GrupoToolbarDetailsComponent } from './../components/admin/grupo/toolbar/grupo-toolbar-details/grupo-toolbar-details.component';

import { DispositivoComponent } from './../components/admin/dispositivo/dispositivo/dispositivo.component';
import { DispositivoAddComponent } from './../components/admin/dispositivo/operaciones/dispositivo-add/dispositivo-add.component';
import { DispositivoEditComponent } from './../components/admin/dispositivo/operaciones/dispositivo-edit/dispositivo-edit.component';
import { DispositivoDetailsComponent } from './../components/admin/dispositivo/operaciones/dispositivo-details/dispositivo-details.component';
import { DispositivoToolbarComponent } from './../components/admin/dispositivo/toolbar/dispositivo-toolbar/dispositivo-toolbar.component';
import { DispositivoToolbarDetailsComponent } from './../components/admin/dispositivo/toolbar/dispositivo-toolbar-details/dispositivo-toolbar-details.component';


import { PublicidadComponent } from '../components/admin/publicidad/publicidad/publicidad.component';
import { PublicidadAddComponent } from './../components/admin/publicidad/operaciones/publicidad-add/publicidad-add.component';
import { PublicidadEditComponent } from './../components/admin/publicidad/operaciones/publicidad-edit/publicidad-edit.component';
import { PublicidadDetailsComponent } from './../components/admin/publicidad/operaciones/publicidad-details/publicidad-details.component';
import { PublicidadToolbarComponent } from './../components/admin/publicidad/toolbar/publicidad-toolbar/publicidad-toolbar.component';
import { PublicidadToolbarDetailsComponent } from './../components/admin/publicidad/toolbar/publicidad-toolbar-details/publicidad-toolbar-details.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioAddComponent,
    UsuarioEditComponent,
    UsuarioDetailsComponent,
    UsuarioToolbarComponent,
    UsuarioToolbarDetailsComponent,

    GrupoComponent,
    GrupoAddComponent,
    GrupoEditComponent,
    GrupoDetailsComponent,
    GrupoToolbarComponent,
    GrupoToolbarDetailsComponent,

    DispositivoComponent,
    DispositivoAddComponent,
    DispositivoEditComponent,
    DispositivoDetailsComponent,
    DispositivoToolbarComponent,
    DispositivoToolbarDetailsComponent,

    PublicidadComponent,
    PublicidadAddComponent,
    PublicidadEditComponent,
    PublicidadDetailsComponent,
    PublicidadToolbarComponent,
    PublicidadToolbarDetailsComponent,

  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    UsuarioComponent,
    UsuarioAddComponent,
    UsuarioEditComponent,
    UsuarioDetailsComponent,
    UsuarioToolbarComponent,
    UsuarioToolbarDetailsComponent,

    GrupoComponent,
    GrupoAddComponent,
    GrupoEditComponent,
    GrupoDetailsComponent,
    GrupoToolbarComponent,
    GrupoToolbarDetailsComponent,

    DispositivoComponent,
    DispositivoAddComponent,
    DispositivoEditComponent,
    DispositivoDetailsComponent,
    DispositivoToolbarComponent,
    DispositivoToolbarDetailsComponent,

    PublicidadComponent,
    PublicidadAddComponent,
    PublicidadEditComponent,
    PublicidadDetailsComponent,
    PublicidadToolbarComponent,
    PublicidadToolbarDetailsComponent,


  ],
})
export class AdminModule {}
