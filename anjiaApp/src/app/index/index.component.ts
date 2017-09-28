import {Component, OnInit,AfterContentInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';
// 管道

import {GlobalPropertyService} from './../services/global-property.service';

import {PositionsService} from './../services/positions.service';
import { LocalStorageService } from './../services/local-storage.service';

declare var $ :any;



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [PositionsService,LocalStorageService]
})
export class IndexComponent implements OnInit,AfterContentInit {
  new_houses:any;
  islogin:number=0;
  userName:any;
  text: string = '';
  positions: any;
  houses:any;
  parse:any;
  userId:any;
  constructor(private route: ActivatedRoute,
              private router:Router,
              private localStorage:LocalStorageService,
              private house: PositionsService,
              private glo:GlobalPropertyService,
  ) {

  }

  ngOnInit() {


      $(".myjisuanqi").click(function(){
        $(".jisuanqimain").toggle();
      });


    let that = this;
    that.userId=that.localStorage.get('userId');
    that.glo.hiddenNavs=true;

    $(function(){
      var oFocus=$('#focus'),
        oRight=oFocus.find('.right'),
        oLeft=oFocus.find('.left'),
        aRLi=oRight.find('li'),
        aLLi=oLeft.find('li'),
        index=0,
        timer = null;
      aRLi.click(function(){
        index=$(this).index()
        $(this).addClass('active').siblings().removeClass();
        aLLi.eq(index).addClass('active').siblings().removeClass();
        aLLi.eq(index).stop().animate({'opacity':1},300).siblings().stop().animate({'opacity':0},300);
        stopFoucs();
      })
      oLeft.mouseenter(function(){
        stopFoucs();
      }).mouseleave(function(){
        startFocus();
      });
      timer = setInterval(function(){
        startFocus();
      },5000);
      function startFocus(){
        index++;
        index = index > aRLi.size()-1 ? 0 :index;

        aLLi.eq(index).addClass('active').siblings().removeClass();
        aLLi.eq(index).stop().animate({'opacity':1},300).siblings().stop().animate({'opacity':0},300);
        aRLi.eq(index).addClass('active').siblings().removeClass();
      }
      function stopFoucs(){
        clearInterval(timer);
      }
    })

    $(document).ready(function(){



      let cal = "";
      let result = 0;

      $(".normal").click(function(){

        let text = $(this).attr("value");

        let regNum = /[0-9]/g;

        if(regNum.test(text) || text === "+" || text === "-" || text === "*" || text === "/" || text === "."){
          cal += text;
          $("#jsq").val(cal);
        }
        else if(text === "clear"){
          $("#jsq").val("");
          cal = "";
        }
        else if(text === "="){
          result = eval(cal);
          cal = "";
          $("#jsq").val(result);
        }

      });





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

  ngAfterContentInit(){

  }



  search(searchText){
    console.log(searchText);
    this.router.navigate(['/houses',searchText]);
  }




  toHouseDetail(id) {
    this.router.navigate(['/detail',id]);
  }

  out(){
    this.localStorage.remove('token')
    this.localStorage.remove('userId')
    this.userName=this.localStorage.remove('userName');
    this.router.navigate(['/login']);
  }

}
