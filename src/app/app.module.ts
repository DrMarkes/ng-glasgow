import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CanDeactivate, Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {DataService} from './services/data.service';
import {MockDataService} from './services/mock-data.service';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { ResponseCardComponent } from './components/response-card/response-card.component';
import { ResultComponent } from './components/result/result.component';
import {ResponseContainerComponent} from './components/response-container/response-container.component';
import {ResultResolverService} from './services/result-resolver.service';
import {CanDeactivateGuard} from './guards/can-deactivate.guard';

const ROUTES: Route[] = [
  {path: '', component: ResponseContainerComponent},
  {
    path: 'result',
    component: ResultComponent,
    canDeactivate: [CanDeactivateGuard],
    resolve: {
      result: ResultResolverService
    }
  },
  {path: '**', redirectTo: ''}
];

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
    {provide: DataService, useClass: MockDataService},
    ResultResolverService,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
