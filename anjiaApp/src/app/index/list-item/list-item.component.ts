import { Component, OnInit } from '@angular/core';
import {PositionsService} from '../../services/positions.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  providers: [PositionsService]
})
export class ListItemComponent implements OnInit {
  // @Input() house:any;
  new_houses:any;
  houses:any;

  constructor(
    private router:Router,
    private house: PositionsService
  ) { }

  ngOnInit() {
    let that = this;
    that.house.getAllHouses(function (result) {

      that.new_houses =result.slice(0, 9);

    });
  }
  goHouseDetail(id) {
    this.router.navigate(['/detail',id]);
  }
}
