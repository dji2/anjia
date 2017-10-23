import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public viewCtrl: ViewController


  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  loginout(){
    this.storage.ready().then(() =>{
      this.storage.remove('token');
    })

    this.viewCtrl.dismiss();
    this.navCtrl.push(LoginPage);

  }

}
