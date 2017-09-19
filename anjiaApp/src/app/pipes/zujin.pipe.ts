import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zujin'
})
export class ZujinPipe implements PipeTransform {

  transform(houses: any, args?: any): any {
    if(args<=8000 && args>0){
      var new_houses=houses.filter(function (house,index) {
        if(house.housePrice>=args && house.housePrice<=(args+2000)){
          return house;
        }
      });
      return new_houses;
    }else if(args<10000 && args>8000) {
      var new_houses = houses.filter(function (house, index) {
        if (house.housePrice<10000 && house.housePrice>8000) {
          return house;
        }
      });
      return new_houses;
    } else if(args>=10000){
      var new_houses=houses.filter(function (house,index) {
        if(house.housePrice>=10000){
          return house;
        }
      });
      return new_houses;
    } else{
      return houses;
    }
  }

}
