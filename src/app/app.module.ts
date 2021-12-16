import { SdkModule } from './sdk.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthPagesModule } from './pages/auth-pages/auth-pages.module';
import { DashboardPagesModule } from './pages/dashboard-pages/dashboard-pages.module';
import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DominoInterceptor } from './common/interceptors/domino-interceptor';
import { LoaderInterceptor } from './common/interceptors/loader-interceptor';
import { LoaderService } from './common/services/loader.service';

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
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DominoInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
