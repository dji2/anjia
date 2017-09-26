import { Component, OnInit } from '@angular/core';
import {PositionsService} from '../services/positions.service';
declare var $:any;
@Component({
  selector: 'app-hot-houses',
  templateUrl: './hot-houses.component.html',
  styleUrls: ['./hot-houses.component.css'],
  providers: [PositionsService]
})
export class HotHousesComponent implements OnInit {
  hot_houses:any;


  constructor(    private house: PositionsService) { }

  ngOnInit() {
    let that = this;
    that.house.getAllHouses(function (result) {

      that.hot_houses =result.slice(5, 11);


    });

  }

}
