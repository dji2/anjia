import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PositionsService} from './../../services/positions.service';
import { LocalStorageService } from './../../services/local-storage.service';
declare var $:any;
@Component({
  selector: 'app-houses-details',
  templateUrl: './houses-details.component.html',
  styleUrls: ['./houses-details.component.css'],
  providers: [PositionsService]
})
export class HousesDetailsComponent implements OnInit {

  arr_li=['周边配套','看房记录','相似房源'];
  tab_index=0;
  houseId:any;
  house:any;
  users:any;
  comment:any;
  islogin:number=0;
  islogin1:number=0;
  userId:any;
  constructor(

    private route: ActivatedRoute,
    private ho: PositionsService,
    private localStorage:LocalStorageService

  ) { }

  ngOnInit() {


    $(window).scroll(function() {
      var scrolltop = $(this).scrollTop();
      if (scrolltop >= 650 && scrolltop <= 2300) {
        $("#yezhuright").addClass("yezhuright-after");
      } else {
        $("#yezhuright").removeClass("yezhuright-after");
      }
    })




    this.houseId=this.route.snapshot.paramMap.get('id');
    let that=this;
    that.ho.getHouseById(this.houseId,function (house) {

      console.log(house);
      that.house=house[0];
    })

    that.ho.getArrInfo({"houseId":that.houseId},function (result) {

      console.log(result);
      that.users=result;
    })
    that.userId=that.localStorage.get('userId');
    if(that.localStorage.get('token')){
      that.islogin=1;
      that.islogin1=0;
      // that.userName=that.localStorage.get('userName');
    }else {
      // $('#denglu').html('房主信息必须登录后才能查看')
      that.islogin=0;
      that.islogin1=1;
    }

  }


  addArr(comment){
    alert(comment);
    let that = this;
    that.comment = comment.value;

    that.ho.addArrInfo({"comment":that.comment,"userId":that.localStorage.get('userId'),"houseId":that.houseId},function (result) {
      if(result.stateCode == 15){
        alert("评论成功");
        that.ho.getArrInfo({"houseId":that.houseId},function (result) {

          console.log(result);
          that.users=result;
        })
      }else{
        alert("评论失败");
      }
    });



  }
  // ngDoCheck(){
  //   this.ho.getArrInfo({"houseId":this.houseId},function (result) {
  //
  //     console.log(result);
  //     this.users=result;
  //   })
  // }
  agree(arrangeId){
    // alert(arrangeId);
    let that = this;


    that.ho.agree({"arrangeId":arrangeId,"houseId":that.houseId,"userId":that.localStorage.get('userId')},function (result) {
      alert(result.stateCode);
      if(result.stateCode == 17){
        alert("点赞成功");
        that.ho.getArrInfo({"houseId":that.houseId},function (result) {

          console.log(result);
          that.users=result;
        })
      }else{
        alert("点赞失败");
      }
    });

  }


  shou:number=0;

  collect(){
    let that = this;
    if(that.shou==0){
      $('#shou').html('已收藏')
      that.shou=1;
      that.ho.focus({"houseId":that.houseId,"userId":that.localStorage.get('userId')},function (result) {
        alert(result.stateCode);
        if(result.stateCode == 21){
          alert("收藏成功");

        }else{
          alert("收藏失败");
        }
      });
    }else if(that.shou==1){
      $('#shou').html('收藏成功')
      that.shou=0;
      that.ho.unFocus({"houseId":that.houseId,"userId":that.localStorage.get('userId')},function (result) {
        alert(result.stateCode);
        if(result.stateCode == 23){
          alert("取消收藏");
        }else{
          alert("取消失败");
        }
      });
    }
  }


}
