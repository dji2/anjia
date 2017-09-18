import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zujinxiao'
})
export class ZujinxiaoPipe implements PipeTransform {

  transform(houses: any, args?: any): any {
    if(args){
      var new_houses=houses.filter(function (house,index) {
        if(house.housePrice>args){
          return house;
        }
      });
      return new_houses;
    }else{
      return houses;
    }
  }

}
