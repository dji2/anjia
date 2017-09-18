import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { OwnerComponent } from './owner/owner.component';
import { HousesComponent } from './houses/houses.component';
import { FooterComponent } from './footer/footer.component';
//导入路由模块

import {AppRoutingModule} from './app-routing.module';


//导入子模块
import {PersonalCenterModule} from './personal-center/personal-center.module';



//导入服务

import {GlobalPropertyService} from './services/global-property.service';
import { PositionDetailComponent } from './positons/position-detail/position-detail.component';
import { HousesDetailsComponent } from './houses/houses-details/houses-details.component';
import { RegisterComponent } from './register/register.component';
import { SearchPipe } from './pipes/search.pipe';
import { HouseListComponent } from './houses/house-list/house-list.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent,
    PageNotFoundComponent,
    LoginComponent,
    PositionDetailComponent,
    OwnerComponent,
    HousesComponent,
    FooterComponent,
    HousesDetailsComponent,
    RegisterComponent,
    SearchPipe,
    HouseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PersonalCenterModule,  //这里一定要放在根路由上面
    AppRoutingModule


  ],
  providers: [GlobalPropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
