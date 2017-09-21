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



  constructor(
    // private route: ActivatedRoute,

  ) {

  }

  ngOnInit() {

  }

  _fenye:any;
 // _fenye= _fenye2
  do4(s){
    this._fenye=s;
    this.flag=s;
    // console.log(this._fenye)
  }


}
