import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PositionsService} from './../../services/positions.service';
import { LocalStorageService } from './../../services/local-storage.service';

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
  constructor(

    private route: ActivatedRoute,
    private ho: PositionsService,
    private localStorage:LocalStorageService

  ) { }

  ngOnInit() {
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



}
