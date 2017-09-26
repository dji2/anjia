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
  //查询看房信息
  getArrInfo(house,callback){
    this.http.post(this.url+'/getArrInfo',house).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

  //修改看房信息
  editHouse(house,callback){
    this.http.post(this.url+'/editHouse',house).subscribe(
      function (result) {
        console.log(result)
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  //添加看房信息
  addArrInfo(arrInfo,callback){
    this.http.post(this.url+'/addArrInfo',arrInfo).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

//关注
  focus(focusInfo,callback){
    this.http.post(this.url+'/focus',focusInfo).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

  //取消关注

  unFocus(focusInfo,callback){
    this.http.post(this.url+'/unFocus',focusInfo).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

  //删除我的房源
  delHouse(houseInfo,callback){
    this.http.post(this.url+'/delHouse',houseInfo).subscribe(
      function (result) {
        console.log("服务"+result[0])
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  agree(arrange,callback){
    this.http.post(this.url+'/agree',arrange).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

  getFocusNum(houseid,callback){
    this.http.post(this.url+'/getFocusNum',houseid).subscribe(
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
  //获取头条信息
  getNews(callback){
    this.http.get(this.url+'/getNews').subscribe(function (result) {
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
