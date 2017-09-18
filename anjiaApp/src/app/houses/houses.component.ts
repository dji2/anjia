import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

import {PositionsService} from './../services/positions.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
  providers: [PositionsService]
})
export class HousesComponent implements OnInit {

  text: string = '';

  houses: any;

  _stext:string;

  @Input() searchText:string='';

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private house: PositionsService
  ) { }

  ngOnInit() {
    let that = this;
    // let val=that.route.snapshot.paramMap.get('val');
    // that.text=val;

    that.house.getAllPositions(function (result) {
      that.houses = result;
      console.log(result);
    })
  }

  toHouseDetail(id) {
    this.router.navigate(['/detail',id]);
  }

  search(s){
    this._stext=s;
  }
}
