import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { KlingosComponent } from './components/klingos/klingos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KlingosListComponent } from './components/klingos-list/klingos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KlingosComponent,
    KlingosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
