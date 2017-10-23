import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { HouseDetailPage } from '../house-detail/house-detail';
import { ModalController, NavParams } from 'ionic-angular';
import {HousesService} from '../../providers/houses.service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HousesService]
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  imgs = ['1.jpg','2.jpg','3.jpg'];
  houses;
  all_houses;
  pageNum:number = 0;
  pageSize:number = 5;
  noMore:boolean = false;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private hoSer:HousesService,
    private toastCtrl: ToastController,

  ) {

  }

  trackByHouses(index: number, house: any): number { return house.houseId; }
  ionViewDidLoad() {
    this.hoSer.getAllHouses().then(data=>{
      this.all_houses = data;
      this.houses = this.all_houses.slice(this.pageNum * this.pageSize,(this.pageNum+1) * this.pageSize);
      this.pageNum = this.pageNum+1;
    })
  }

  slideChanged(){
    // let currentIndex = this.slides.getActiveIndex();
    // console.log('Current index is', currentIndex);
    this.slides.startAutoplay();
  }

  toDetail(house){
    this.navCtrl.push(HouseDetailPage,{'id':house.id});
  }
  showImg(img){
    console.log(img);
  }

  delete(houseId){
    for(let i=0;i<this.houses.length;i++){
      if(houseId===this.houses[i].houseId){
        this.houses.splice(i,1);
      }
    }
  }

  //下拉刷新
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.hoSer.getAllHouses().then(data=>{
        this.all_houses = data;
        this.houses=this.all_houses.slice(0,(this.pageNum) * this.pageSize);
      })
      refresher.complete();
    }, 2000);
  }


  //上滑加载更多
  doInfinite(infiniteScroll){

    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(this.all_houses);
        this.houses.push(...this.all_houses.slice(this.pageNum * this.pageSize,(this.pageNum+1) * this.pageSize));
        this.pageNum = this.pageNum+1;
        if((this.all_houses.length / this.pageSize) <= this.pageNum -1){
          this.noMore = true;
          infiniteScroll.enable(false);

        }



        // console.log(this.houses);

        resolve();
        }, 500);
    })
  }

  // doInfinite(infiniteScroll) {
  //   console.log('Begin async operation');
  //
  //   setTimeout(() => {
  //     let newhouse = {
  //       "houseId": 11,
  //       "houseName": "凤起路西湖边温馨日式首次整租",
  //       "housePrice": "5000",
  //       "publishTime": "2017-10-10T16:00:00.000Z",
  //       "room": 3,
  //       "livingroom": 1,
  //       "bathroom": 1,
  //       "kitchen": 1,
  //       "balcony": 1,
  //       "aspect": "北",
  //       "ownerId": 2,
  //       "ownerName": "Desong",
  //       "telphone": "18362202673",
  //       "personInfo": "这是个帅气的小伙",
  //       "area": 90,
  //       "areaName": "工业园区 海德公园",
  //       "address": "文汇公寓北",
  //       "floor": 6
  //     };
  //     this.houses.push(newhouse);
  //     infiniteScroll.complete();
  //   }, 500);
  // }
}
