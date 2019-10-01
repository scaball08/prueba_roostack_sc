import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCountRoutingModule } from './user-count-routing.module';
import { CountLeterComponent } from './count-leter.component';

@NgModule({
  declarations: [CountLeterComponent],
  imports: [
    CommonModule,
    UserCountRoutingModule
  ]
})
export class UserCountModule { }
