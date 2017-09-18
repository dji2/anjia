import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mianji'
})
export class MianjiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
