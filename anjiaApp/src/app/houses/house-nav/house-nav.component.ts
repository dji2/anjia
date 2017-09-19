import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-nav',
  templateUrl: './house-nav.component.html',
  styleUrls: ['./house-nav.component.css']
})
export class HouseNavComponent implements OnInit {

  flag_number='';
  flag_number1=0;
  flag_number2=0;
  flag_number3=5;
  constructor() { }

  ngOnInit() {
  }
  _quyu:string;


  do(s){
    this._quyu=s;
    this.flag_number=s;
  }
  _zujin:string;

  do1(s){
    this._zujin=s;
    this.flag_number1=s;
  }
  _mianji:string;

  do2(s){
    this._mianji=s;
    this.flag_number2=s;
  }
  _zujinxiao:string;

  do3(s){
    this._zujinxiao=s;
    this.flag_number3=s;
  }
}
