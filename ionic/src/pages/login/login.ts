import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {TabsPage} from "../tabs/tabs";

import {UsersService} from '../../providers/users.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[UsersService]
})
export class LoginPage {
  loginForm: FormGroup;
  username: any;
  password: any;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    // private viewCtrl: ViewController,
    // private appCtrl: App,
    private storage:Storage,
    private userSer:UsersService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      telephone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.username = this.loginForm.controls['telephone'];
    this.password = this.loginForm.controls['password'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(user){
    this.userSer.login(user).then((result)=> {
      console.log(result);

      if(result){
        if(result.stateCode===1){
          this.storage.ready().then(()=>{

            console.log(result);
            this.storage.set('userName',result.userName);
            this.storage.set('userId',result.userId);
            this.storage.set('token',result.token);

          });
          this.navCtrl.push(TabsPage);

        }else {
          let toast = this.toastCtrl.create({
            message: '用户名或密码错误',
            duration: 3000
          });
          toast.present();
        }
      }else{
        let toast = this.toastCtrl.create({
          message: '服务器异常',
          duration: 3000
        });
        toast.present();
      }
    })
    //alert
    // let alert = this.alertCtrl.create({
    //   title: 'New Friend!',
    //   subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
    //   buttons: ['OK']
    // });
    // alert.present();


    // let toast = this.toastCtrl.create({
    //   message: 'User was added successfully',
    //   duration: 3000
    // });
    // toast.present();
    // this.storage.set('isLogin', true);
    // this.storage.ready().then(() =>{
    //   this.storage.set('isLogin',true);
    // })
    //
    // this.navCtrl.push(TabsPage,{userId:'001'});
  }
}
