import { Component, OnInit } from '@angular/core';
import {PositionsService} from '../../services/positions.service';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  providers: [PositionsService]
})
export class ListItemComponent implements OnInit {
  new_houses:any;
  houses:any;

  constructor(

    private house: PositionsService
  ) { }

  ngOnInit() {
    let that = this;
    that.house.getAllHouses(function (result) {

      that.new_houses =result.slice(0, 9);


    });
  }

}
