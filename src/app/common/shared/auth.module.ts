import { MaterialModule } from './../../material.module';
import { RegisterComponent } from './../components/register/register.component';
import { LoginComponent } from './../components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
