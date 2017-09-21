import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-house-list-item',
  templateUrl: './house-list-item.component.html',
  styleUrls: ['./house-list-item.component.css']
})
export class HouseListItemComponent implements OnInit {
  @Input() house:any;
  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }
  toHouseDetail(id) {
    this.router.navigate(['/detail',id]);
  }

}
