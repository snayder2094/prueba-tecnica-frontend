import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {userModel} from "../../models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: userModel[] = [];

  constructor(private  userService: UsersService) { }

  ngOnInit(): void {

    this.userService.getusers()
      .subscribe( resp => {
        this.users = resp;
      });
  }
  borrarusuario( user: userModel, i: number ) {

    this.users.splice(i, 1);
    this.userService.borraruser( user.id ).subscribe();

  }

}
