import { Component } from '@angular/core';
import { IonicPage,ModalController, NavController, NavParams } from 'ionic-angular';
import {PersonalPage} from "../personal/personal";

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }
  ionViewWillEnter() {
    const profileModal = this.modalCtrl.create(PersonalPage, { userId: 8675309 });
    profileModal.present();
    // this.navCtrl.push(PersonalPage);
  }

}
