import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { PersonalCenterComponent } from './personal-center.component';
import { SettingComponent } from './setting/setting.component';
import { MyRentComponent } from './my-rent/my-rent.component';

//导入路由模块

import {PersonalCenterRoutingModule} from './personal-center-routing.module';
import { MyRecordComponent } from './my-record/my-record.component';
import { MyCommunityComponent } from './my-community/my-community.component';
import { UploadComponent } from './setting/upload/upload.component';
import { NicknameComponent } from './setting/nickname/nickname.component';
import { PasswordComponent } from './setting/password/password.component';

import {PublicModule} from '../public/public.module';
import { StatusPipe } from './../pipes/status.pipe';


@NgModule({
  declarations: [
    PersonalCenterComponent,
    SettingComponent,
    MyRentComponent,
    MyRecordComponent,
    MyCommunityComponent,
    MyRentComponent,
    UploadComponent,
    NicknameComponent,
    PasswordComponent,
    StatusPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
      PublicModule,

    PersonalCenterRoutingModule
  ],
  providers: [],
  bootstrap: [PersonalCenterComponent]
})
export class PersonalCenterModule { }
