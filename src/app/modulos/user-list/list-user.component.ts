import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
public lista:any[];
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.getList().subscribe((datos)=>{
      console.log(datos);
      this.lista = datos;
      console.log(this.lista);
    });
  }

}
