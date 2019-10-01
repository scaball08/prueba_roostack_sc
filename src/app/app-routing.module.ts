import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modulos/home.component';

const routes: Routes = [
  {path:'', children:[
    {path:'userlist',loadChildren:'./modulos/user-list/user-list.module#UserListModule'},
    {path:'userold',loadChildren: './modulos/users/users.module#UsersModule'},
    {path:'counts',loadChildren:'./modulos/user-count/user-count.module#UserCountModule'},
    {path:'ships',loadChildren:'./modulos/starships/starships.module#StarshipsModule'},
    {path:'terrain',loadChildren:'./modulos/terrain-type/terrain-type.module#TerrainTypeModule'},
    {path:'',redirectTo:'userlist',pathMatch:'full'},
    {path:'**',redirectTo:'userlist',pathMatch:'full'}

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
