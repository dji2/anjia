import { Component, OnInit } from '@angular/core';
import {PositionsService} from '../services/positions.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  providers: [PositionsService]
})
export class NewsDetailComponent implements OnInit {
  getNews:any;
  newsId:any;
 news:any;
  list:any;
  constructor(
    private route: ActivatedRoute,
    private house: PositionsService) { }

  ngOnInit() {



    // this.newsId=this.route.snapshot.paramMap.get('id');
    // let that=this;
    // that.list.getNewsById(this.newsId,function (getNews) {
    //   console.log(getNews);
    //   that.getNews=getNews[0];
    // })
    // let that=this;
    // that.house.getNewsById(id,function (house) {
    //   console.log(house);
    //   that.getNews = result[0];
    // })
    let that = this;
    that.house.getNews(function (result) {
      console.log(result);
      that.getNews = result;
      that.newsId=that.getNews.id;

    //
    //
    });

  }

}
