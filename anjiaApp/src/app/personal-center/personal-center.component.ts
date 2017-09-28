import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LocalStorageService } from './../services/local-storage.service';


import {GlobalPropertyService} from './../services/global-property.service';
import {UsersService} from './../services/users.service';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css'],
  providers:[UsersService]
})
export class PersonalCenterComponent implements OnInit {
  bianhua1=1;
  bianhua2=0;
  userId:any;
  userName:any;
  user:any;
  tabs= [ '我的看房记录' , '业主', '关注','设置'];
  tab_index= 0 ;
  arr_li = ['first tab', ' second tab ', ' third tab',' third tab'];
  _val:string='';
  constructor(
    private router:Router,
    private glo:GlobalPropertyService,
    private localStorage:LocalStorageService,
    private ed: UsersService

  ) { }

  ngOnInit() {
    this.glo.hiddenNavs=true;
    let that = this;
    that.userId = that.localStorage.get('userId');
    that.userName = that.localStorage.get('userName');



    that.ed.getUserInfo({"token":that.localStorage.get('token'),"userId":that.localStorage.get('userId')},function (result) {
       // console.log(result);
      that.user = result[0];

    })

  }

  toIndex(){
    this.router.navigate(['/index']);
    this.glo.serverUrl='http://127.0.0.1:8000';
  }

  ngOnDestroy(){
    // console.log('personal-ngOnDestroy----------');
    this.glo.hiddenNavs=false;
  }



  bian(userForm){
    let that=this;
    let user  = userForm.form.value;
    user.token = that.localStorage.get('token')
    user.userId=that.localStorage.get('userId')
    that.ed.editUser(user,function (result) {
      // 弹出接收后台数据数值

      // alert(result.stateCode);
      if(result.stateCode==35){
        // alert(result.stateCode)
        that.ed.getUserInfo({"token":that.localStorage.get('token'),"userId":that.localStorage.get('userId')},function (result) {
          // console.log(result);
          that.user = result[0];
          that.localStorage.set('userName',that.user.userName);
        })



      }else {
        // alert(result)
        alert('提交失败，请稍后再试');
      }
    });
    this.bianhua1=1;
    this.bianhua2=0;

  }

  hua(){
    this.bianhua1=0;
    this.bianhua2=1;
  }
}
