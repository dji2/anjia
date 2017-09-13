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

  house:any;
  constructor(

    private route: ActivatedRoute,
    private ho: PositionsService
  ) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    let that=this;
    that.ho.getPositionById(id,function (house) {

      console.log(house);
      that.house=house[0];
    })
  }

}
