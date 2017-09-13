/**
 * Created by lzhan on 2017/9/3.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonalCenterComponent} from './personal-center.component';
import {SettingComponent} from './setting/setting.component';
import {MyRentComponent} from './my-rent/my-rent.component';
import {MyCommunityComponent} from './my-community/my-community.component';
import {MyRecordComponent} from './my-record/my-record.component';
const routes: Routes = [

  {
    path: 'personal-center',
    component: PersonalCenterComponent,
    children: [
      {
        path: 'setting',
        component: SettingComponent,
      },
      {
        path: 'rent',
        component: MyRentComponent,
      },
      {
        path: 'community',
        component: MyCommunityComponent,
      },
      {
        path:'record',
        component: MyRecordComponent,
      }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalCenterRoutingModule {
}
