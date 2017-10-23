import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SettingPage } from '../setting/setting';

/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }

  back(){
    this.viewCtrl.dismiss();

    this.navCtrl.push(TabsPage);
  }

  toSetting(){
    this.navCtrl.push(SettingPage);
  }
}
