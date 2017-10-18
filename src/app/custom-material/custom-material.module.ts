import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [
    MatCardModule,
    FlexLayoutModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
