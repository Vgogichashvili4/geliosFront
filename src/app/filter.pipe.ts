import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (!value) {
      return [];
    }
    if (!filterString) {
      return value;
    }

    return value.filter((item:any) => {
      return item.distance.toString().includes(filterString) ||
             item.dateOfFill.toString().includes(filterString);
    });
  }

}
