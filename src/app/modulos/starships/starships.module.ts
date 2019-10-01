import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { ShipsComponent } from './ships.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ShipsComponent],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StarshipsModule { }
