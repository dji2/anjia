import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

//导入服务

import {PositionsService} from './../services/positions.service';
declare var $ :any;


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [PositionsService]
})
export class IndexComponent implements OnInit {

  text: string = '';

  positions: any;

  constructor(private route: ActivatedRoute,
              private router:Router,
              private ps: PositionsService) {

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
    // let val=that.route.snapshot.paramMap.get('val');
    // that.text=val;

    that.ps.getAllPositions(function (result) {
      that.positions = result;
    })

  }


  toPositionDetail(id) {
    this.router.navigate(['/detail',id]);
  }

}
