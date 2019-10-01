import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import { StarshipsService } from '../../services/starships.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {

  public terrSelect:string;
  public planet:any;
  public terrains:string[]=["rock","desert","mountain","barren","ocean",
                            "cityscape","mountains","grassy hills","swamps","forests",
                            "lakes","gas giant","swamp","jungles","tundra","ice caves",
                             "mountain ranges","temperate","tropical","grasslands"];
 constructor( private terraService:StarshipsService) {

 }

  ngOnInit() {

}

getPlanet(selter:string){

this.terraService.getPlanet(selter).subscribe((data:any)=>{

  console.log(data);
  this.planet = data;
});
}

}
