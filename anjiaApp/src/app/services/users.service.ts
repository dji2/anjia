import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersService {
  url:string='http://10.40.4.64:3000/users';

   constructor(
    private http:HttpClient
  ) {

  }

  login(user,callback){
    this.http.post(this.url+'/login',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  getFocusHouses(user,callback){
    this.http.post(this.url+'/getFocusHouses',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

  getRecord(user,callback){
    this.http.post(this.url+'/getRecord',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
//获取看房信息（用户）
  getMyRecord(user,callback){
    this.http.post(this.url+'/getMyRecord',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

//删除信息
  delRecord(arrInfo,callback){
    this.http.post(this.url+'/delRecord',arrInfo).subscribe(
      function (result) {
        console.log(result)
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }


  //按照arrangeId删除信息
  delRecordByarrId(arrInfo,callback){
    this.http.post(this.url+'/delRecordByarrId',arrInfo).subscribe(
      function (result) {
        console.log(result)
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

  getMyHouses(user,callback){
    this.http.post(this.url+'/getMyHouses',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }


  register(user,callback){
    this.http.post(this.url+'/regist',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

  getCodeByphone(user,callback){
    const that=this;
    // alert(that.url);
    /////////////////////////'/check'//////////////
    that.http.post(this.url+'/check',user).subscribe(

      function (result) {
        callback(result);
      },
      function (error) {
        alert(error.message);
      }
    )
  }


  addUser(){

  }



  getUserInfo(user,callback){
    this.http.post(this.url+'/getUserInfo',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }

  editUser(user,callback){
    this.http.post(this.url+'/editUser',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }


}
