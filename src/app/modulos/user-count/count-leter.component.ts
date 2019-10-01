import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-count-leter',
  templateUrl: './count-leter.component.html',
  styleUrls: ['./count-leter.component.css']
})
export class CountLeterComponent implements OnInit {

  public lista:any[];
  public leterCount:any;
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.getPrsons();
  }

  getPrsons(){
    this.userService.getPersons().subscribe((datos)=>{
      console.log(datos);
      this.lista = datos;
      console.log(this.lista);
      if(this.lista)
      this.getLeter();

    });
  }

  getLeter(){
    let vec:string='';
    let arrPer:any[]=[];
    this.lista.forEach(element => {
      vec += element.name.first;
    });

    for (let i = 0; i < vec.length; i++) {
      let cont= 0;
      let letra = vec.charAt(i);
      for (let a = 0; a < vec.length; a++) {
        if((vec.charAt(a)).toUpperCase()==letra.toUpperCase()){

          cont+=1;
        }

      }
      arrPer.push({letras:letra,cantidad:cont.toString()});

    }

    arrPer  = arrPer.sort((a,b)=>{

      if((parseInt(a.cantidad))>(parseInt(b.cantidad))){
        return 1;
      }

      if((parseInt(a.cantidad))<(parseInt(b.cantidad))){
        return -1;
      }
      return 0;
    });


    this.leterCount =  arrPer[arrPer.length-1];



  }
}
