import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zujinxiao'
})
export class ZujinxiaoPipe implements PipeTransform {

  transform(houses: any, args?: any): any {
    if(args==1){
     var new_houses=houses;
      new_houses.sort(function (houseA,houseB) {
          return parseInt( houseA.housePrice) - parseInt( houseB.housePrice);
      })

      return new_houses;
    }else if(args==2) {
      var new_houses=houses;
      new_houses.sort(function (houseA,houseB) {
        return parseInt( houseB.housePrice)-parseInt( houseA.housePrice) ;
      })
      return new_houses;
    }else if(args==3) {
      var new_houses=houses;
      new_houses.sort(function (houseA,houseB) {
        return parseInt( houseA.area)-parseInt( houseB.area) ;
      })
      return new_houses;
    }else if(args==4) {
      var new_houses=houses;
      new_houses.sort(function (houseA,houseB) {
        return parseInt( houseB.area)-parseInt( houseA.area) ;
      })
      return new_houses;
    }else{
      return houses;
    }
  }

}
