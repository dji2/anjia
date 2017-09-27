import { Component,ViewChild } from '@angular/core';

import {GlobalPropertyService} from './services/global-property.service';


import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})

export class AppComponent {
  title = 'app';
  _url:string;
  _hiddenNavs:boolean;
  userName:any;
  userId:any;
  islogin:number=0;

  constructor(
    private  glo:GlobalPropertyService,
    private localStorage:LocalStorageService
  ){}

  ngOnInit(){


    let that = this;
    that._url=that.glo.serverUrl;
    that._hiddenNavs=that.glo.hiddenNavs;
    that.userId=that.localStorage.get('userId');

    if(that.localStorage.get('token')){
      that.islogin=1;
      that.userName=that.localStorage.get('userName');
    }else {
      that.islogin=0;
    }
  }

  ngAfterContentChecked() {
    this._url=this.glo.serverUrl;
    this._hiddenNavs=this.glo.hiddenNavs;
  }
  out(){
    this.localStorage.remove('token')
    this.localStorage.remove('userId')
    this.userName=this.localStorage.remove('userName');
  }
}
