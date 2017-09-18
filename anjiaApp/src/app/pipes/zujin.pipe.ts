import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zujin'
})
export class ZujinPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
