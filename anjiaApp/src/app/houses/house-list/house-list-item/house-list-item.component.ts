import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import {PositionsService} from './../../../services/positions.service';
import { LocalStorageService } from './../../../services/local-storage.service';
import {ActivatedRoute, ParamMap} from '@angular/router';



@Component({
  selector: 'app-house-list-item',
  templateUrl: './house-list-item.component.html',
  styleUrls: ['./house-list-item.component.css']
})
export class HouseListItemComponent implements OnInit {
  @Input() house:any;
  focusnum:any;
  // houseId:any;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private focus: PositionsService,
    private localStorage:LocalStorageService
  ) { }

  ngOnInit() {
    // this.houseId=this.route.snapshot.paramMap.get('id');
    let that = this;
    // let val=that.route.snapshot.paramMap.get('val');
    // that.text=val;

    that.focus.getFocusNum({"houseId":that.house.houseId},function (result) {
      // console.log(result[0].focusNum);
      that.focusnum=result[0].focusNum;
      // if(result.stateCode == 21){
      //   alert("收藏成功");
      //
      // }else{
      //   alert("收藏失败");
      // }
    });
  }
  toHouseDetail(id) {
    this.router.navigate(['/detail',id]);
  }

}
