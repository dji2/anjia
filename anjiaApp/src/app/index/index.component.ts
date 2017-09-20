import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';
// 管道


import {PositionsService} from './../services/positions.service';
import { LocalStorageService } from './../services/local-storage.service';

declare var $ :any;


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [PositionsService,LocalStorageService]
})
export class IndexComponent implements OnInit {
  new_houses:any;
  islogin:number=0;
  userName:any;
  text: string = '';
  positions: any;
  houses:any;

  constructor(private route: ActivatedRoute,
              private router:Router,
              private localStorage:LocalStorageService,
              private house: PositionsService
  ) {

  }

  ngOnInit() {

    $(document).ready(function(){
      $("#zf").click(function(){
        $("#topanimate").hide(1000);
      });

      $('.thumbnail').mouseenter(function () {
        $(this).css("background-color","rgba(34, 34, 34, 0.09)");
      });

      $(".thumbnail").mouseleave(function(){
        $(this).css("background-color","white");
      });


      $(window).scroll(function(){
        var scrolltop=$(this).scrollTop();
        if(scrolltop>=700){
          $("#elevator_item").show();
        }else{
          $("#elevator_item").hide();
        }
      });
      $("#elevator").click(function(){
        $("html,body").animate({scrollTop: 0}, 500);
      });
      $(".qr").hover(function(){
        $(".qr-popup").show();
      },function(){
        $(".qr-popup").hide();
      });


    });

    let that = this;

    that.house.getAllHouses(function (result) {

      that.new_houses =result.slice(0, 8);



    });

    if(that.localStorage.get('token')){
      that.islogin=1;
      that.userName=that.localStorage.get('userName')
    }else {
      that.islogin=0;
    }


  }


  toHouseDetail(id) {
    this.router.navigate(['/detail',id]);
  }

}
