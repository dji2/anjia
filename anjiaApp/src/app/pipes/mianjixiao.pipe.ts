import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mianjixiao'
})
export class MianjixiaoPipe implements PipeTransform {

  transform(houses: any, args?: any): any {
    // console.log(args)
    // console.log(houses)
    var new_houses = houses.slice(10*(args-1),10*(args)-1);
    return new_houses;
    // if(args){
    //   var new_houses=houses.filter(function (house,index) {
    //     house = houses.slice(10*(args-1),10*(args)-1)
    //       return house;
    //   });
    //   return new_houses;
    // }else{
    //   return houses;
    // }
  }

}
