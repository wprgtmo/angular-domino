import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { MatNativeDateModule } from '@angular/material/core'



@NgModule({
  imports: [
    CdkTableModule,
    MatNativeDateModule
  ],
  exports: [
    CdkTableModule,
    MatNativeDateModule
  ],
})
export class SdkModule {}
