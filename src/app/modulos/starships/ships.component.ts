import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';
import {FormsModule, NgForm} from "@angular/forms";
@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  public ship:any;
  public countPassenger:number;
  constructor(private shipService:StarshipsService ) {

   }

  ngOnInit() {

  }


  getfastShip(pasajeros:number){

     this.shipService.getShips(pasajeros).subscribe((dato)=>{

      console.log(dato);
      this.ship = dato;

     });

  }
}
