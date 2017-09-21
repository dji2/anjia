import { Component, OnInit,Input } from '@angular/core';
// import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],

})
export class HousesComponent implements OnInit {

  // text: string = '';


  flag=1;


  // @Input() searchText:string='';

  constructor(
    // private route: ActivatedRoute,

  ) {

  }

  ngOnInit() {
      this._fenye ='1';
  }
  _fenye:string;

  do4(s){
    this._fenye=s;
    this.flag=s;
    // console.log(this._fenye)
  }


}
