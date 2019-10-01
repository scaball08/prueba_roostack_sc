import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerrainTypeRoutingModule } from './terrain-type-routing.module';
import { TerrainComponent } from './terrain.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TerrainComponent],
  imports: [
    CommonModule,
    TerrainTypeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TerrainTypeModule { }
