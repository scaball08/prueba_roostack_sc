import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { ListUserComponent } from './list-user.component';


@NgModule({
  declarations: [ListUserComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,

  ]
})
export class UserListModule { }
