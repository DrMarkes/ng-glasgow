import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResponseCardComponent } from './response-card/response-card.component';
import {MaterialDesignModule} from './material-design/material-design.module';

@NgModule({
  declarations: [
    AppComponent,
    ResponseCardComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
