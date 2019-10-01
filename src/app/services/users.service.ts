import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private  url:string =  'https://randomuser.me/api/?&noinfo&inc=dob,name,email,picture';
  constructor(private http:HttpClient) {

  }

  getList():Observable<any>{

    return this.http.get(this.url + '&results=10').pipe(
      map((data:any)=>{


data  = data['results'].sort((a,b)=>{

  if(a.name.first>b.name.first){
    return 1;
  }

  if(a.name.first<b.name.first){
    return -1;
  }
  return 0;
});
return data;
      })
    );
  }

  getOld(edad:number):Observable<any>{
    let flag = true;
    let usuario:any;

     do {
    usuario = this.http.get(this.url + '&results=20').pipe(
        map((data)=>{

          let vec = data['results'];
          console.log(vec);

          data = vec.filter(item=> item.dob.age > edad );
          console.log(data);
          return  data;
        })
      );

     } while (!usuario);

    return usuario;

  }

 getPersons():Observable<any>{

  return this.http.get("https://randomuser.me/api/?&noinfo&inc=name&results=5").pipe(
    map((data:any)=>{


data  = data['results'].sort((a,b)=>{

if(a.name.first>b.name.first){
  return 1;
}

if(a.name.first<b.name.first){
  return -1;
}
return 0;
});
return data;
    })
  );
}


}
