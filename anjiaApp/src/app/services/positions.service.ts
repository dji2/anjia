import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class PositionsService {

  url:string='http://10.40.4.64:3000/houses';
  constructor(
    private http:HttpClient
  ) {

  }

  getAllPositions(callback){
    this.http.get(this.url).subscribe(function (result) {
      callback(result);
    })
  }
  getPositionById(houseId,callback){
    this.getAllPositions(function (houses) {
      let ho=houses.filter(function (item,index) {
         if(item.houseId==houseId){
           return item;
         }
      });
      callback(ho);

    })
  }
}
