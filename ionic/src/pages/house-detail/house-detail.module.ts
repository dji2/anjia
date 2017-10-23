import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HouseDetailPage } from './house-detail';

@NgModule({
  declarations: [
    HouseDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HouseDetailPage),
  ],
})
export class HouseDetailPageModule {}
