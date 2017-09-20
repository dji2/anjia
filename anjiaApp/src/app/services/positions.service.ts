import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class PositionsService {

  url:string='http://10.40.4.64:3000/houses';
  constructor(
    private http:HttpClient
  ) {

  }
  addHouse(user,callback){
    this.http.post(this.url+'/addHouse',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  getAllHouses(callback){
    this.http.get(this.url).subscribe(function (result) {
      callback(result);
    })
  }
  getHouseById(houseId,callback){
    this.getAllHouses(function (houses) {
      let ho=houses.filter(function (item,index) {
         if(item.houseId==houseId){
           return item;
         }
      });
      callback(ho);

    })
  }
}
