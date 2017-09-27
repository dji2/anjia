import { Component, OnInit } from '@angular/core';
import {UsersService} from './../../services/users.service';
import { LocalStorageService } from './../../services/local-storage.service';
import {PositionsService} from './../../services/positions.service';

@Component({
  selector: 'app-my-record',
  templateUrl: './my-record.component.html',
  styleUrls: ['./my-record.component.css'],
  providers:[UsersService,PositionsService],
})
export class MyRecordComponent implements OnInit {
  houses:any;
  constructor(
    private userSer:UsersService,
    private localStorage:LocalStorageService,
    private ho: PositionsService,


  ) { }

  ngOnInit() {
    let that = this;
    let userId = that.localStorage.get('userId');
    let token = that.localStorage.get('token');
    console.log(userId);
    that.userSer.getRecord({"userId":userId,"token":token},function (result) {
      that.houses = result;
      console.log("onnin"+result);
    })
  }
  delRecord(houseId){
    let that = this;
    let userId = that.localStorage.get('userId');
    let token = that.localStorage.get('token');
    that.userSer.delRecord({"houseId":houseId,"userId":userId},function (result) {
      console.log(result);
    })

    that.userSer.getRecord({"userId":userId,"token":token},function (result) {
      that.houses = result;

      console.log(result);
    })
  }

    //业主同意看房
  agreeWatch(arrangeId){
    let that = this;
    let userId = that.localStorage.get('userId');
    let token = that.localStorage.get('token');
    that.ho.agreeWatch({"arrangeId":arrangeId},function (result) {
      console.log(result);
    })

    that.userSer.getRecord({"userId":userId,"token":token},function (result) {
      that.houses = result;

      console.log(result);
    })
  }
}
