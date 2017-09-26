import { Component, OnInit } from '@angular/core';
import {PositionsService} from '../services/positions.service';
import {Router} from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-hot-houses',
  templateUrl: './hot-houses.component.html',
  styleUrls: ['./hot-houses.component.css'],
  providers: [PositionsService]
})
export class HotHousesComponent implements OnInit {
  hot_houses:any;


  constructor(       private router:Router,
                     private house: PositionsService
  ) { }

  ngOnInit() {
    let that = this;
    that.house.getAllHouses(function (result) {

      that.hot_houses =result.slice(2, 8);


    });

  }


  hotHouseDetail(id) {
    this.router.navigate(['/detail',id]);
  }

}
