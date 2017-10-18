import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {ResponseService} from './services/response.service';
import {MockResponseService} from './services/mock-response.service';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import { ResponseCardComponent } from './components/response-card/response-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponseCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [
    {provide: ResponseService, useClass: MockResponseService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
