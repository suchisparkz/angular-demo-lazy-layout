import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexContainerModule } from '../app/flex/flex-container.module'
import { FakeBackendService } from './http-fake-service/fake-backend-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexContainerModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
