import { Component, OnInit } from '@angular/core';
import {userModel} from "../../models/user.model";
import {NgForm} from "@angular/forms";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = new userModel();

  constructor( private  userService: UsersService ) { }

  ngOnInit(): void {
  }
  guardar(form:NgForm){
    if (form.invalid){
      console.log("datos incorrectos")
      return;
    }
    console.log(form)
    console.log(this.user)
    this.userService.crearUser(this.user)
      .subscribe( (resp) => {
    });
  }

}
