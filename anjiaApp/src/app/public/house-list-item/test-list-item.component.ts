import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

import {PositionsService} from './../../services/positions.service';

@Component({
  selector: 'app-test-list-item',
  templateUrl: './test-list-item.component.html',
  styleUrls: ['./test-list-item.component.css']
})
export class TestListItemComponent implements OnInit {
  @Input() house:any;
  focusnum:any;

  constructor(
    private router:Router,
    private focus: PositionsService,

  ) { }

  ngOnInit() {
    let that = this;
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
