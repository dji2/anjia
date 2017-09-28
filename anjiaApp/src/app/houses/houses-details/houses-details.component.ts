import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PositionsService} from './../../services/positions.service';
import { LocalStorageService } from './../../services/local-storage.service';
import {GlobalPropertyService} from './../../services/global-property.service';

declare var $:any;
declare var AMap:any;


@Component({
  selector: 'app-houses-details',
  templateUrl: './houses-details.component.html',
  styleUrls: ['./houses-details.component.css'],
  providers: [PositionsService]
})
export class HousesDetailsComponent implements OnInit {

  arr_li=['看房记录','相似房源'];
  tab_index=0;
  houseId:any;
  house:any;
  users:any;
  comment:any;
  islogin:number=0;
  islogin1:number=0;
  userId:any;
  shou:number=0;
  kan:number=0;
  constructor(

    private route: ActivatedRoute,
    private ho: PositionsService,
    private localStorage:LocalStorageService,
  private  glo:GlobalPropertyService,

  ) { }

  ngOnInit() {
  this.glo.hiddenNavs = false;

    var map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 12,
      center: [120.74357, 31.274963]
    });
//地图内容
    map.setFeatures(['bg', 'building', 'road', 'point']);
//地图空间
    AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.MapType'],
      function () {
        map.addControl(new AMap.ToolBar());

        map.addControl(new AMap.Scale());
      });
//覆盖物
    var marker = new AMap.Marker({
      position: [120.74357, 31.27496]
    });
    marker.setMap(map);
    var circle = new AMap.Circle({
      center: [120.74357, 31.27496],
      radius: 100,
      fillOpacity: 0.2,
      strokeWeight: 1
    })
    circle.setMap(map);
//自定义窗体
    var infowindow;
    var infoWindowContent = '<div class="infowindow-content mapstyle" style="border-radius: 5px" ><h3>为您精准定位，找房更直观</h3><span style="color:red;font-size:12px;" class="mapspan"><img style=""; src="../../../assets/images/green2.png" alt=""></span></div>';
    map.plugin('AMap.AdvancedInfoWindow', function () {
      infowindow = new AMap.AdvancedInfoWindow({
        panel: 'panel',
        placeSearch: true,
        asOrigin: true,
        asDestination: true,
        content: infoWindowContent
      });
      infowindow.open(map, [120.74357, 31.27496]);
    });




    $(window).scroll(function() {
      var scrolltop = $(this).scrollTop();
      if (scrolltop >= 650 && scrolltop <= 2100) {
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
    that.ho.isFocus({"houseId":that.houseId,"userId":that.localStorage.get('userId')},function (result) {
      // alert(result.stateCode);
      if(result.stateCode == 33){
        that.shou=1;
        $('#shou').html('已收藏')
      }else{
        that.shou=0;
        $('#shou').html('收藏此房')
      }
    });
    that.ho.isAsk({"houseId":that.houseId,"userId":that.localStorage.get('userId')},function (result) {
      // alert(result.stateCode);
      if(result.stateCode == 43){
        $('#kan').html('预约看房中');
        that.kan=1
      }else{
         that.kan=0;
        $('#kan').html('我要看房')
      }
    });

  }


  addArr(comment){
    alert(comment);
    let that = this;
    that.comment = comment.value;

    that.ho.addArrInfo({"comment":that.comment,"userId":that.localStorage.get('userId'),"houseId":that.houseId},function (result) {
      if(result.stateCode == 15){
        console.log("评论成功");
        that.ho.getArrInfo({"houseId":that.houseId},function (result) {

          console.log(result);
          that.users=result;
        })
      }else{
        console.log("评论失败");
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
      console.log(result.stateCode);
      if(result.stateCode == 17){
        console.log("点赞成功");
        that.ho.getArrInfo({"houseId":that.houseId},function (result) {

          console.log(result);
          that.users=result;
        })
      }else{
        console.log("点赞失败");
      }
    });
    $(".fa-thumbs-o-up").attr("class", "fa fa-thumbs-up");
  }




  collect(){
    let that = this;
    if(that.shou==0){
      $('#shou').html('已收藏')
      that.shou=1;
      that.ho.focus({"houseId":that.houseId,"userId":that.localStorage.get('userId')},function (result) {
        // alert(result.stateCode);
        if(result.stateCode == 21){
          alert("收藏成功");

        }else{
          alert("收藏失败");
        }
      });
    }else if(that.shou==1){
      $('#shou').html('收藏此房')
      that.shou=0;
      that.ho.unFocus({"houseId":that.houseId,"userId":that.localStorage.get('userId')},function (result) {
        // alert(result.stateCode);
        if(result.stateCode == 23){
          alert("取消收藏");
        }else{
          alert("取消失败");
        }
      });
    }
  }

  kanfang(){
    let that = this;
    if(that.kan==0){
      $('#kan').html('预约看房中')
      that.kan=1;
      that.ho.askWatch({"houseId":that.houseId,"userId":that.localStorage.get('userId')},function (result) {
        alert(result.stateCode);
        if(result.stateCode == 39){
          alert("预约成功");

        }else{
          alert("预约失败");
        }
      });
    }else if(that.kan==1){
      $('#kan').html('预约看房中')
    }
  }

}
