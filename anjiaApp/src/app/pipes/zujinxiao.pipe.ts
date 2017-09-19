import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zujinxiao'
})
export class ZujinxiaoPipe implements PipeTransform {

  transform(houses: any, args?: any): any {


    if(args==1){
     var new_houses=houses;
      new_houses.sort(function (houseA,houseB) {
          return  houseA.housePrice - houseB.housePrice;
      })
      return new_houses;
    }else if(args==2) {
      var new_houses=houses;
      new_houses.sort(function (houseA,houseB) {
        return houseB.housePrice - houseA.housePrice ;
      })
      return new_houses;
    }else if(args==3) {
      var new_houses=houses;
      new_houses.sort(function (houseA,houseB) {
        return  houseA.area - houseB.area ;
      })
      return new_houses;
    }else if(args==4) {
      var new_houses=houses;
      new_houses.sort(function (houseA,houseB) {
        return  houseB.area - houseA.area ;
      })
      return new_houses;
    }else{
      var new_houses = houses;
      new_houses.sort(function(a,b){
        return Date.parse(b.publishTime) - Date.parse(a.publishTime);//时间正序
      });
      return new_houses;
    }
  }

}
