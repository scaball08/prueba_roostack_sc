import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerrainComponent } from './terrain.component';

const routes: Routes = [{path:'',component:TerrainComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerrainTypeRoutingModule { }
