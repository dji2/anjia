import { Component, OnInit } from '@angular/core';
import {UsersService} from './../../services/users.service';
import { LocalStorageService } from './../../services/local-storage.service';
import {PositionsService} from './../../services/positions.service';

@Component({
  selector: 'app-my-rent',
  templateUrl: './my-rent.component.html',
  styleUrls: ['./my-rent.component.css'],
  providers:[UsersService,PositionsService],
})
export class MyRentComponent implements OnInit {
  houses:any;
  constructor(
    private userSer:UsersService,
    private localStorage:LocalStorageService,
    private ho: PositionsService,

  ) { }

  ngOnInit() {
    let that = this;
    let userId = that.localStorage.get('userId')
    let token = that.localStorage.get('token');

    that.userSer.getFocusHouses({"userId":userId,"token":token},function (result) {
      that.houses = result;

      console.log(result);
    })
  }
  //取消关注
  unFocus(houseId){
    let that = this;
    let userId = that.localStorage.get('userId')
    let token = that.localStorage.get('token');

    that.ho.unFocus({"userId":that.localStorage.get('userId'),"houseId":houseId},function (result) {
      if(result.stateCode == 23){
        that.userSer.getFocusHouses({"userId":userId,"token":token},function (result) {
          that.houses = result;

          console.log(result);
        })
      }else{
        console.log("取消关注房源失败")
      }
      ;
    })


  }

}
