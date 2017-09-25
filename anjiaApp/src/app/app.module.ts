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
  import { HouseListComponent } from './houses/house-list/house-list.component';
import { HouseSearchComponent } from './houses/house-search/house-search.component';
import { HouseNavComponent } from './houses/house-nav/house-nav.component';
import { ZujinxiaoPipe } from './pipes/zujinxiao.pipe';
import { MianjixiaoPipe } from './pipes/mianjixiao.pipe';
import { QuyuPipe } from './pipes/quyu.pipe';
import { ZujinPipe } from './pipes/zujin.pipe';
import { MianjiPipe } from './pipes/mianji.pipe';
import {AppRoutingModule} from './app-routing.module';


//导入子模块
import {PersonalCenterModule} from './personal-center/personal-center.module';



//导入服务

import {GlobalPropertyService} from './services/global-property.service';
import { HousesDetailsComponent } from './houses/houses-details/houses-details.component';
import { RegisterComponent } from './register/register.component';
import { SearchPipe } from './pipes/search.pipe';
import { LocalStorageService } from './services/local-storage.service';
import { HouseListItemComponent } from './houses/house-list/house-list-item/house-list-item.component';
import { ListItemComponent } from './index/list-item/list-item.component';

import {Ng2PaginationModule} from "ng2-pagination";
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { HotHousesComponent } from './hot-houses/hot-houses.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent,
    PageNotFoundComponent,
    LoginComponent,
    OwnerComponent,
    HousesComponent,
    FooterComponent,
    HousesDetailsComponent,
    RegisterComponent,
    SearchPipe,
    HouseListComponent,
    HouseSearchComponent,
    HouseNavComponent,
    ZujinxiaoPipe,
    MianjixiaoPipe,
    QuyuPipe,
    ZujinPipe,
    MianjiPipe,
    HouseListItemComponent,
    ListItemComponent,
    NewsComponent,
    NewsItemComponent,
    HotHousesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2PaginationModule,
    PersonalCenterModule,  //这里一定要放在根路由上面
    AppRoutingModule


  ],
  providers: [GlobalPropertyService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
