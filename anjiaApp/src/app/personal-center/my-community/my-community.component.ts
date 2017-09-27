import { Component, OnInit } from '@angular/core';
import {UsersService} from './../../services/users.service';
import { LocalStorageService } from './../../services/local-storage.service';
import {PositionsService} from './../../services/positions.service';

@Component({
  selector: 'app-my-community',
  templateUrl: './my-community.component.html',
  styleUrls: ['./my-community.component.css'],
  providers:[UsersService,PositionsService],
})
export class MyCommunityComponent implements OnInit {
  houses:any;
  arrHouses:any;

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
    that.userSer.getMyHouses({"userId":userId,"token":token},function (result) {
      that.houses = result;

      console.log(result);
    });
    that.userSer.getMyRecord({"userId":userId,"token":token},function (result) {
      that.arrHouses = result;
      console.log(result);
    })
  }

  delHouse(houseId){
    let that = this;
    let userId = that.localStorage.get('userId');
    let token = that.localStorage.get('token');
    that.ho.delHouse({"houseId":houseId},function (result) {
      if(result.stateCode == 27){
        that.userSer.getMyHouses({"userId":userId,"token":token},function (result) {
          that.houses = result;
          console.log(result);
        })
      }else{
        console.log("删除房源失败");
      }

    })


  }

  //按照arangeId删除
  delRecordByarrId(arrangeId){
    let that = this;
    let userId = that.localStorage.get('userId');
    let token = that.localStorage.get('token');
    that.userSer.delRecordByarrId({"arrangeId":arrangeId},function (result) {
      if(result.stateCode == 45){
        that.userSer.getMyRecord({"userId":userId,"token":token},function (result) {
          that.arrHouses = result;

          console.log(result);
        })
      }else{
        console.log("删除看房信息失败");
      }

    })


  }
  editHouse(houseId,houseName){
    let that = this;
    let userId = that.localStorage.get('userId');
    let token = that.localStorage.get('token');
    that.ho.editHouse({"houseId":houseId,"houseName":houseName},function (result) {
      if(result.stateCode == 31){
        that.userSer.getMyHouses({"userId":userId,"token":token},function (result) {
          that.houses = result;
          console.log(result);
        })
      }else{
        console.log("修改房源信息失败");
      }

    })


  }
//业主同意看房
  agreeWatch(arrangeId){
    let that = this;
    let userId = that.localStorage.get('userId');
    let token = that.localStorage.get('token');
    that.ho.agreeWatch({"arrangeId":arrangeId},function (result) {
      if(result.stateCode == 41){
        that.userSer.getMyRecord({"userId":userId,"token":token},function (result) {
          that.arrHouses = result;

          console.log(result);
        })
      }else{
        alert("同意看房失败")
      }
    })


  }
}
