import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatCardModule,
    MatGridListModule
  ],
  declarations: []
})
export class MaterialDesignModule { }
