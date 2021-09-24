import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventoComponent } from './common/components/evento/evento.component';
import { JugadorComponent } from './common/components/jugador/jugador.component';
import { LoginComponent } from './common/components/login/login.component';
import { RegisterComponent } from './common/components/register/register.component';
import { HeaderComponent } from './common/components/header/header.component';
import { MenuComponent } from './common/components/menu/menu.component';
import { AuthPagesModule } from './pages/auth-pages/auth-pages.module';
import { DashboardPagesModule } from './pages/dashboard-pages/dashboard-pages.module';

@NgModule({
  declarations: [
    AppComponent,
    EventoComponent,
    JugadorComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthPagesModule,
    DashboardPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
