import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(houses: any, args?: any): any {
    if(args){
      var new_houses=houses.filter(function (house,index) {
        if(house.status==2){
          return house;
        }
      });
      return new_houses;
    } else{
      return houses;
    }
  }

}
