import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../../../services/local-storage.service';
import {UsersService} from './../../../services/users.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor(
    private localStorage:LocalStorageService,
    private ed: UsersService

  ) { }

  ngOnInit() {
  }

  editPass(editForm){
    let that=this;
    let user  = editForm.form.value;
    user.token = that.localStorage.get('token')
    user.userId=that.localStorage.get('userId')
    that.ed.editPass(user,function (result) {
      // console.log(result);
    console.log(result)
    })
  }

}
