import { Component, OnInit } from '@angular/core';
import {UsersService} from './../services/users.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsersService],

})
export class LoginComponent implements OnInit {
  login_res:string;

  constructor(
    private userSer:UsersService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  //单例  单一的实例
  toLogin(loginForm){
    let that=this;
    that.userSer.login(loginForm.form.value,function (result) {
      // 弹出接收后台数据数值
      //      alert(result.stateCode);
      if(result.stateCode==1){

      alert('登陆成功');
        that.router.navigate(['/index']);
      }else{
        that.login_res='用户名或密码错误';
      }
    })
  }

}








