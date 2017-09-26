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
    })
  }

  delHouse(houseId){
    let that = this;
    let userId = that.localStorage.get('userId');
    let token = that.localStorage.get('token');
    that.ho.delHouse({"houseId":houseId},function (result) {
      console.log(result);
    })

    that.userSer.getMyHouses({"userId":userId,"token":token},function (result) {
      that.houses = result;
      console.log(result);
    })
  }

  editHouse(houseId,houseName){
    let that = this;
    let userId = that.localStorage.get('userId');
    let token = that.localStorage.get('token');
    that.ho.editHouse({"houseId":houseId,"houseName":houseName},function (result) {
      console.log(result);
    })

    that.userSer.getMyHouses({"userId":userId,"token":token},function (result) {
      that.houses = result;
      console.log(result);
    })
  }

}
