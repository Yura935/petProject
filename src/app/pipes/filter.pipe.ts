import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, field: string): Array<any> {
    if (!value) {
      return value;
    }
    if (!field) {
      return value;
    }
    return value.filter(item => item.name.toLowerCase().includes(field.toLowerCase()));
  }
}
