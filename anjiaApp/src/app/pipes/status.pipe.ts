import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(houses: any, args?: any): any {
    if(args == 0){
      var new_houses=houses.filter(function (house,index) {
        if(house.status==0){
          return house;
        }
      });
      return new_houses;
    } else if(args == 1){
      var new_houses=houses.filter(function (house,index) {
        if(house.status==1){
          return house;
        }
      });
      return new_houses;
    }else if(args == 2){
      var new_houses=houses.filter(function (house,index) {
        if(house.status==2){
          return house;
        }
      });
      return new_houses;
    }
  }

}
