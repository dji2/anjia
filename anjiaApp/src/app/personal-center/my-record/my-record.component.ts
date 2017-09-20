import { Component, OnInit } from '@angular/core';
import {UsersService} from './../../services/users.service';
import { LocalStorageService } from './../../services/local-storage.service';

@Component({
  selector: 'app-my-record',
  templateUrl: './my-record.component.html',
  styleUrls: ['./my-record.component.css'],
  providers:[UsersService],
})
export class MyRecordComponent implements OnInit {
  houses:any;
  constructor(
    private userSer:UsersService,
    private localStorage:LocalStorageService

  ) { }

  ngOnInit() {
    let that = this;
    let userId = that.localStorage.get('userId');
    let token = that.localStorage.get('token');
    console.log(userId);
    that.userSer.getRecord({"userId":userId,"token":token},function (result) {
      that.houses = result;

      console.log(result);
    })
  }

}
