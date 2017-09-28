import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {GlobalPropertyService} from './../../services/global-property.service';

@Component({
  selector: 'app-house-search',
  templateUrl: './house-search.component.html',
  styleUrls: ['./house-search.component.css']
})
export class HouseSearchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private glo:GlobalPropertyService,

  ) { }

  _stext:string;

  ngOnInit() {
    this.glo.hiddenNavs=false;

    this._stext=this.route.snapshot.paramMap.get('searchText');

    console.log(this._stext);
    this.search(this._stext);
  }
  search(s){
    this._stext=s;
  }
}
