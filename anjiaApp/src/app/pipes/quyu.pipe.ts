import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quyu'
})
export class QuyuPipe implements PipeTransform {

  transform(houses: any, args?: any): any {
    if(args){
      var new_houses=houses.filter(function (house,index) {
        if(house.areaName.indexOf(args)!=-1){
          return house;
        }
      });
      return new_houses;
    }else{
      return houses;
    }
  }

}
