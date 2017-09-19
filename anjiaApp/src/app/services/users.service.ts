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

  editUser(){

  }

}
