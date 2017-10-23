import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HousesService} from '../../providers/houses.service';

/**
 * Generated class for the HouseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-house-detail',
  templateUrl: 'house-detail.html',
  providers:[HousesService]

})
export class HouseDetailPage {
  house;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private hoSer:HousesService

  ) {
  }

  ionViewDidEnter() {
    let id = this.navParams.get('id');
    // this.house = this.hoSer.getHouseById(id);
    console.log(id);
  }


  back(){
    this.navCtrl.pop();
  }

}
