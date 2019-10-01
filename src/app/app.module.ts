import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modulos/home.component';
import { StarshipsService } from './services/starships.service';
import { UsersService } from './services/users.service';
import {HttpClientModule} from '@angular/common/http/';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StarshipsService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
