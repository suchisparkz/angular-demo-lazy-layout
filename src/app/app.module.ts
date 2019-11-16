import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AddUserModule } from './add-user/add-user.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListModule } from './user-list/user-list.module';

import { FakeBackendService } from './http-fake-service/fake-backend-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AddUserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeBackendService),
    UserListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
