import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  arr_li=['热点新闻','安家帮住','经验分享'];
  constructor() { }

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
  }

}
