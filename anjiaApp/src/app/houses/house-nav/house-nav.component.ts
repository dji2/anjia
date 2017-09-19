import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-nav',
  templateUrl: './house-nav.component.html',
  styleUrls: ['./house-nav.component.css']
})
export class HouseNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  _quyu:string;

  do(s){
    this._quyu=s;
  }
  _zujin:string;

  do1(s){
    this._zujin=s;
  }
  _mianji:string;

  do2(s){
    this._mianji=s;
  }
  _zujinxiao:string;

  do3(s){
    this._zujinxiao=s;
  }
}
