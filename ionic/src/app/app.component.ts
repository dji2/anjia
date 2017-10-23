import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage:any;
  isLogin:boolean;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.storage.ready().then(() =>{
        this.storage.get('token').then((val) =>{
          console.log(val);
          if(val){
            this.rootPage = TabsPage;
          }else{
            this.rootPage = LoginPage;
          }
        })
      })

      // let isLogin = this.storage.get('isLogin');
      // console.log(isLogin);
      // if(isLogin){
      //   this.rootPage = TabsPage;
      // }else{
      //   this.rootPage = LoginPage;
      // }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
