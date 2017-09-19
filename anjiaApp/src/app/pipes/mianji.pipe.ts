import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mianji'
})
export class MianjiPipe implements PipeTransform {

  transform(houses: any, args?: any): any {
    if(args<=110){
      var new_houses=houses.filter(function (house,index) {
        if(house.area>=args && house.area<=(args+20)){
          return house;
        }
      });
      return new_houses;
    }else if(args<130 && args>110) {
      var new_houses = houses.filter(function (house, index) {
        if (house.area<130 && house.area>110) {
          return house;
        }
      });
      return new_houses;
    } else if(args>=130){
      var new_houses=houses.filter(function (house,index) {
        if(house.area>=130){
          return house;
        }
      });
      return new_houses;
    } else{
      return houses;
    }
  }

}
