import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {ResponseService} from './services/response.service';
import {MockResponseService} from './services/mock-response.service';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { ResponseCardComponent } from './components/response-card/response-card.component';
import { ResultComponent } from './components/result/result.component';
import {ResponseContainerComponent} from './components/response-container/response-container.component';

// TODO navigate to '', guard on result
const ROUTES: Route[] = [
  {path: '', component: ResponseContainerComponent},
  {path: 'result', component: ResultComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    ResponseCardComponent,
    ResultComponent,
    ResponseContainerComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
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
