import { Component, OnInit,Input } from '@angular/core';
// import {ActivatedRoute, ParamMap} from '@angular/router';

declare var AMap:any;
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

    var map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 12,
      center: [118.756376, 32.052573]
    });
//地图内容
    map.setFeatures(['bg', 'building', 'road', 'point']);
//地图空间
    AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.MapType'],
      function () {
        map.addControl(new AMap.ToolBar());

        map.addControl(new AMap.Scale());
      });
//覆盖物
    var marker = new AMap.Marker({
      position: [118.756376, 32.052573]
    });
    marker.setMap(map);
    var circle = new AMap.Circle({
      center: [118.756376, 32.052573],
      radius: 100,
      fillOpacity: 0.2,
      strokeWeight: 1
    })
    circle.setMap(map);
//自定义窗体
    var infowindow;
    var infoWindowContent = '<div class="infowindow-content"><h3>欢迎下载本地图插件</h3><p>基于高德地图API</p><span style="color:red;font-size:12px;">(此处文字可修改)</span></div>';
    map.plugin('AMap.AdvancedInfoWindow', function () {
      infowindow = new AMap.AdvancedInfoWindow({
        panel: 'panel',
        placeSearch: true,
        asOrigin: true,
        asDestination: true,
        content: infoWindowContent
      });
      infowindow.open(map, [118.756376, 32.052573]);
    });
  }



  _fenye:any;
 // _fenye= _fenye2
  do4(s){
    this._fenye=s;
    this.flag=s;
    // console.log(this._fenye)
  }


}
