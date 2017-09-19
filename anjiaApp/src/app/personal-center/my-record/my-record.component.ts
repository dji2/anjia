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


    that.userSer.getRecord({"userId":2},function (result) {
      that.houses = result;

      console.log(result);
    })
  }

}
