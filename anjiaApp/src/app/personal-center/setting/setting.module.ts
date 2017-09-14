import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { SettingComponent } from './setting.component';


//导入路由模块

// import {SettingRoutingModule} from './setting-routing.module';
import { UploadComponent } from './upload/upload.component';
import { NicknameComponent} from './nickname/nickname.component';
import { PasswordComponent } from './password/password.component';




@NgModule({
  declarations: [
    SettingComponent,
    NicknameComponent,
    UploadComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // SettingRoutingModule
  ],
  providers: [],
  bootstrap: [SettingComponent]
})
export class SettingModule { }
