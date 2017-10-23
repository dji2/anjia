import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MePage } from '../me/me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MePage;

  constructor(

    public navParams: NavParams,

  ) {

  }


  ionViewDidEnter(){
      let id = this.navParams.get('userId');
    console.log(id);
  }
}
