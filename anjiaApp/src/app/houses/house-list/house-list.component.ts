import { Component, OnInit,Input } from '@angular/core';
// import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

import {PositionsService} from './../../services/positions.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css'],
  providers: [PositionsService]
})
export class HouseListComponent implements OnInit {

  houses: any;
  @Input() searchText:string='';
  @Input() zujin:string='';
  text: string = '';

  constructor(
    // private route: ActivatedRoute,
    private router:Router,
    private house: PositionsService
  ) { }

  ngOnInit() {
    let that = this;
    // let val=that.route.snapshot.paramMap.get('val');
    // that.text=val;

    that.house.getAllHouses(function (result) {
      that.houses = result;
      console.log(result);
    })
  }
  toHouseDetail(id) {
    this.router.navigate(['/detail',id]);
  }


}
