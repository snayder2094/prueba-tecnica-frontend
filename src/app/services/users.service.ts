import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {userModel} from "../models/user.model";
import {delay, map} from "rxjs/operators";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "http://localhost:8080";

  constructor(private http:HttpClient) {

  }
  crearUser(user: userModel){
    return this.http.post(`${this.url}/create`, user)
      .pipe(
        map( (resp: any) => {
          console.log(resp)
        })
      );
  }

  actualizaruser( user: userModel ) {

    const usert = {
      ...user
    };

    delete usert.id;

    return this.http.put(`${ this.url }/update/${ usert.id }`, usert);


  }

  borraruser(id: string) {

    return this.http.delete(`${ this.url }/delete/${ id }`);

  }

  getusers() {
    return this.http.get(`${ this.url }/`)
      .pipe(
        map( this.crearArreglo ),
        delay(0)
      );
  }

  private crearArreglo( usersObj: object ) {

    const users: userModel[] = [];

    Object.keys( usersObj ).forEach( key => {

      const user: userModel = usersObj[key];
      user.id = key;

      users.push( user );
    });


    return users;

  }
}
