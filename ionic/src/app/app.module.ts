import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MePage } from '../pages/me/me';
import { LoginPage } from '../pages/login/login';
import { HouseDetailPage } from '../pages/house-detail/house-detail';
import { PersonalPage } from '../pages/personal/personal';
import { SettingPage } from '../pages/setting/setting';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



//service

import {HttpClientModule} from '@angular/common/http';

import {UsersService} from '../providers/users.service';
import {HousesService} from '../providers/houses.service';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    LoginPage,
    HouseDetailPage,
    PersonalPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    LoginPage,
    HouseDetailPage,
    PersonalPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersService,
    HousesService
  ]
})
export class AppModule {}
