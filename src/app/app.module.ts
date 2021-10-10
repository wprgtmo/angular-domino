import { SdkModule } from './sdk.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthPagesModule } from './pages/auth-pages/auth-pages.module';
import { DashboardPagesModule } from './pages/dashboard-pages/dashboard-pages.module';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SdkModule,
    MaterialModule,
    AuthPagesModule,
    DashboardPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
