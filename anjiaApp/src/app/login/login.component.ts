import { Component, OnInit } from '@angular/core';
import {UsersService} from './../services/users.service';
import {Router} from '@angular/router';
import { LocalStorageService } from './../services/local-storage.service';
import {GlobalPropertyService} from './../services/global-property.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsersService],

})
export class LoginComponent implements OnInit {
  login_res:string;
  userName:any;
  userId:any;
  constructor(
    private  glo:GlobalPropertyService,
    private userSer:UsersService,
    private router:Router,
    private localStorage:LocalStorageService

  ) { }

  ngOnInit() {
    this.glo.hiddenNavs = true;
  }
  //单例  单一的实例
  toLogin(loginForm){
    let that=this;
    that.userSer.login(loginForm.form.value,function (result) {
      // 弹出接收后台数据数值
      //      alert(result.stateCode);
      if(result.stateCode==1){
        that.localStorage.set('userId',result.userId);
        that.localStorage.set('token',result.token);
        that.localStorage.set('userName',result.userName);
// 跳转到首页
        that.router.navigate(['/index']);


      }else{
        alert('用户名或密码错误');
        that.login_res='用户名或密码错误';
      }
    })
  }

}








