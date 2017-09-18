import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quyu'
})
export class QuyuPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
