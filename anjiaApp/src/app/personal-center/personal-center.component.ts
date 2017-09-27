import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LocalStorageService } from './../services/local-storage.service';


import {GlobalPropertyService} from './../services/global-property.service';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css'],
  providers:[]
})
export class PersonalCenterComponent implements OnInit {
  userId:any;
  userName:any;
  tabs= [ '我的看房记录' , '我的关注房源', '我的房源','设置'];
  tab_index= 0 ;
  arr_li = ['first tab', ' second tab ', ' third tab',' third tab'];
  _val:string='';
  constructor(
    private router:Router,
    private glo:GlobalPropertyService,
    private localStorage:LocalStorageService
  ) { }

  ngOnInit() {
    this.glo.hiddenNavs=true;
    let that = this;
    that.userId = that.localStorage.get('userId');
    that.userName = that.localStorage.get('userName');

  }

  toIndex(){
    this.router.navigate(['/index']);
    this.glo.serverUrl='http://127.0.0.1:8000';
  }

  ngOnDestroy(){
    console.log('personal-ngOnDestroy----------');
    this.glo.hiddenNavs=false;
  }
}
