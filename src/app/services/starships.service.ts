import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private  url:string =  'https://swapi.co/api/starships/';
  private url2 = "https://swapi.co/api/planets/";
  constructor(private http:HttpClient) {

  }


  getShips(passengers:number):Observable<any>{

    return this.http.get(this.url).pipe(
      map((data:any)=>{

        data = data.results;
        console.log('Service aout Cruda');
        console.log(data);
        data = data.filter((item) =>{
          console.log('Service aout first in Filter');
        console.log(item);
          if((parseInt(item.passengers)>=passengers)&&(item.consumables=="1 week")){
            let val:string;
            let bandera:boolean;
            console.log('Service aout first if');
        console.log(item);
            for(let i = 0; i <item.films.length;i++){
              val = item.films[i];
              val = val.substr(val.length - 2,1);
              console.log('La pelicula es: ' + val);
              if(val=="1" || val=="2" || val=="3"){

                bandera = true;
                console.log(bandera);
              }else{
                bandera = false;
                console.log(bandera);
              }
            }

            return bandera;

          }
          return false;

        });
        console.log('Service aout 1');
        console.log(data);


        data  = data.sort((a,b)=>{

          if((parseInt(a.MGLT))>(parseInt(b.MGLT))){
            return 1;
          }

          if((parseInt(a.MGLT))<(parseInt(b.MGLT))){
            return -1;
          }
          return 0;
        });

        console.log('Service aout 2');
        console.log(data);
        return data[data.length-1];
      })
    );

  }

  getPlanet(terrain:string):Observable<any>{

    return this.http.get(this.url2).pipe(

      map((data:any)=>{
        data = data.results;
        console.log('Service aout Cruda');
        console.log(data);
        data = data.filter((item) =>{
          console.log('Service aout first in Filter');
        console.log(item);

          if((item.terrain.indexOf(terrain))!=-1){

            return true;
          }
          return false;

        });

        data  = data.sort((a,b)=>{

          if((parseInt(a.population))>(parseInt(b.population))){
            return 1;
          }

          if((parseInt(a.population))<(parseInt(b.population))){
            return -1;
          }
          return 0;
        });

        return data[data.length-1];


      })
    );

  }

}
