import {Component, OnInit} from '@angular/core';
import {UsersService} from './../services/users.service';
import {Router} from '@angular/router';
import {GlobalPropertyService} from './../services/global-property.service';

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

  constructor(private userSer: UsersService,
              private router: Router,
              private glo: GlobalPropertyService) {
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
      // alert(result);
      if (result.stageCode = '5') {
        that.code_res = ' 该手机号已经注册过 ';
        console.log(that.code_res);
      } else if (result.stageCode = 'e004') {
        that.code_res = '网络连接失败！';
        console.log(that.code_res);
      } else {
        if (result) {
          that.num = result.stageCode;
          that.code_res = '';
          console.log(that.num);
          that.RemainTime();
        }
      }
    });
  }

  toRegister(registerForm) {
    if (this.num = this.code_val) {
      const that = this;
      that.userSer.register(registerForm.form.value, function (result) {
        if (result.stageCode = '5') {
          that.reg_res = '用户名已存在！';
        } else if (result.stageCode = '6') {
          sessionStorage.setItem('token', result.token);
          that.router.navigate(['/index']);
          alert('执行跳转');
          // that.reg_res = '';
        } else {
          that.reg_res = '数据库错误！';
        }
      });
    } else {
      this.reg_res = '验证码错误!!!';
    }
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

  rgcheckbox(): void {
    this.checkbox = !this.checkbox;
  }

}
