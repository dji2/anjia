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




@NgModule({
  declarations: [
    PersonalCenterComponent,
    SettingComponent,
    MyRentComponent,
    MyRecordComponent,
    MyCommunityComponent,
    MyRentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonalCenterRoutingModule
  ],
  providers: [],
  bootstrap: [PersonalCenterComponent]
})
export class PersonalCenterModule { }
