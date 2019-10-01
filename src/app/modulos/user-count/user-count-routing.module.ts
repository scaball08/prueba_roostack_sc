import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountLeterComponent } from './count-leter.component';


const routes: Routes = [{path:'',component:CountLeterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCountRoutingModule { }
