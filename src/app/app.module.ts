import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResponseCardComponent } from './response-card/response-card.component';
import {MaterialDesignModule} from './material-design/material-design.module';
import {ResponseService} from "./services/response.service";
import { CritetionComponent } from './critetion/critetion.component';
import {CriteriesService} from "./services/criteries.service";

@NgModule({
  declarations: [
    AppComponent,
    ResponseCardComponent,
    CritetionComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule
  ],
  providers: [
    ResponseService,
    CriteriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
