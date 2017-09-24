import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-test-list-item',
  templateUrl: './test-list-item.component.html',
  styleUrls: ['./test-list-item.component.css']
})
export class TestListItemComponent implements OnInit {
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
