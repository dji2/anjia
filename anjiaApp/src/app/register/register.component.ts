import {Component, OnInit} from '@angular/core';
import {UsersService} from './../services/users.service';
import {Router} from '@angular/router';
import {GlobalPropertyService} from './../services/global-property.service';
import { LocalStorageService } from './../services/local-storage.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsersService]

})

export class RegisterComponent implements OnInit {
  checkbox: boolean = false;
  flag: any = false;
  iTime = 59;
  code_mes: any = '获取验证码';
  code_val: any;
  code_res: any;
  reg_res: any;
  num: any;
  userName:any;
  userId:any;
  constructor(private userSer: UsersService,
              private router: Router,
              private glo: GlobalPropertyService,
              private localStorage:LocalStorageService
  ) {
  }

  ngOnInit() {
    this.glo.hiddenNavs = true;
    if (sessionStorage.getItem('token')) {
      this.router.navigate(['/index']);
    }
  }

  getCode(registerForm) {

    let that = this;
    that.userSer.getCodeByphone(registerForm.form.value, function (result) {
      console.log(result);
      // if (result.stageCode == 5)
      if (result.stateCode == 5) {
        that.code_res = ' 该手机号已经注册过 ';
        console.log(that.code_res);
      } else if (result.stateCode == 'e004') {

        that.router.navigate(['/page-not-found']);
        console.log(that.code_res);
      } else {
        if (result) {
          // that.num = result.stagteCode;
          // that.code_res = '';
          // console.log(that.num);
          that.RemainTime();
        }
      }
    });
  }

  toRegister(registerForm) {
    // alert('执行跳转');
    const that = this;
    that.userSer.register(registerForm.form.value, function (result) {
      console.log(result);
      if (result.stateCode == 5) {
        that.reg_res = '用户名已存在！';
      } else if (result.stateCode == 6) {
        that.localStorage.set('userId',result.userId);
        that.localStorage.set('token',result.token);
        that.localStorage.set('userName',result.userName);
        that.router.navigate(['/index']);
        // location.href("http://localhost:4200");

        alert('执行跳转');

      } else {
        that.reg_res = '数据库错误！';
      }
    });
  }

  private timer;

  RemainTime() {
    this.flag = true;
    this.timer = setInterval(() => {
      this.code_mes = this.iTime + '秒后重新获取';
      this.iTime--;
      if (this.iTime < 0) {
        this.flag = false;
        clearInterval(this.timer);
      }
    }, 1000);
  }

  // rgcheckbox(): void {
  //   this.checkbox = !this.checkbox;
  // }

}
