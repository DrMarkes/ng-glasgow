import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ResponseService} from './services/response.service';
import {MockResponseService} from './services/mock-response.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: ResponseService, useClass: MockResponseService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
