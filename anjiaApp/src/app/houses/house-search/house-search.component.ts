import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-search',
  templateUrl: './house-search.component.html',
  styleUrls: ['./house-search.component.css']
})
export class HouseSearchComponent implements OnInit {

  constructor() { }

  _stext:string;

  ngOnInit() {
  }
  search(s){
    this._stext=s;
  }
}
