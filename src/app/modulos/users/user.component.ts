import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public edadUser:number;
  public years:number[]=[];
  mostrar:boolean;
  public usuario:any;
  mensaje:string =   "Seleccione una edad";

  constructor(private userService:UsersService) {
    for (let index = 0; index < 100; index++) {
      this.years[index] = index + 1;

    }
  }

  ngOnInit() {

  }


  getUser(edad:any){

    this.userService.getOld(edad).subscribe((dato)=>{
      console.log(dato);

      this.usuario = dato[0];
      if (dato) {
        this.mostrar = true;
      }

    })

  }
}
