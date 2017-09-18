import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mianjixiao'
})
export class MianjixiaoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
