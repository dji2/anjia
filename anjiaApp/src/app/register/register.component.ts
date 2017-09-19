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

      // if (result.stageCode == 5)
      if (result.stagteCode == 5) {
        that.code_res = ' 该手机号已经注册过 ';
        console.log(that.code_res);
      } else if (result.stagteCode == 'e004') {
        that.code_res = '网络连接失败！';

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
    alert('执行跳转');
      const that = this;
      that.userSer.register(registerForm.form.value, function (result) {
        if (result.stageCode = '5') {
          that.reg_res = '用户名已存在！';
        } else if (result.stageCode = '6') {
          sessionStorage.setItem('token', result.token);
          that.router.navigate(['/index']);
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

  rgcheckbox(): void {
    this.checkbox = !this.checkbox;
  }

}
