import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args){
      var new_houses=value.filter(function (house,index) {
        if(house.areaName.indexOf(args)!=-1 || house.introduce.indexOf(args)!=-1){
          return house;
        }
      });
      return new_houses;
    }else{
      return value;
    }
  }

}
