import { Component, OnInit } from '@angular/core';
import {UsersService} from './../../services/users.service';
import { LocalStorageService } from './../../services/local-storage.service';

@Component({
  selector: 'app-my-rent',
  templateUrl: './my-rent.component.html',
  styleUrls: ['./my-rent.component.css'],
  providers:[UsersService],
})
export class MyRentComponent implements OnInit {
  houses:any;
  constructor(
    private userSer:UsersService,
    private localStorage:LocalStorageService
  ) { }

  ngOnInit() {
    let that = this;
    let userId = that.localStorage.get('userId')

    that.userSer.getFocusHouses({"userId":userId},function (result) {
      that.houses = result;

      console.log(result);
    })
  }

}
