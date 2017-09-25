import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-house-search',
  templateUrl: './house-search.component.html',
  styleUrls: ['./house-search.component.css']
})
export class HouseSearchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,

  ) { }

  _stext:string;

  ngOnInit() {
    this._stext=this.route.snapshot.paramMap.get('searchText');

    alert(this._stext);
    this.search(this._stext);
  }
  search(s){
    this._stext=s;
  }
}
