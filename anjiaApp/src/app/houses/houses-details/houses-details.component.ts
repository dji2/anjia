import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PositionsService} from './../../services/positions.service';

@Component({
  selector: 'app-houses-details',
  templateUrl: './houses-details.component.html',
  styleUrls: ['./houses-details.component.css'],
  providers: [PositionsService]
})
export class HousesDetailsComponent implements OnInit {

  arr_li=['周边配套','看房记录','相似房源'];
  tab_index=0;

  house:any;
  users:any;
  constructor(

    private route: ActivatedRoute,
    private ho: PositionsService
  ) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    let that=this;
    that.ho.getHouseById(id,function (house) {

      console.log(house);
      that.house=house[0];
    })

    that.ho.getArrInfo({"houseId":id},function (result) {

      console.log(result);
      that.users=result;
    })

  }



}
