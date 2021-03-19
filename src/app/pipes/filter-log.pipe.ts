import { Pipe, PipeTransform } from '@angular/core';
import { Log } from '../models/logs.interface';
import { LogLevels } from '../utils/enums/log-levels.enum';

@Pipe({
  name: 'filterLog'
})
export class FilterLogPipe implements PipeTransform {

  transform(value: Log[], filterSelected: number): Log[] {
    if (value !== null && filterSelected === undefined) {
      return value;
    }

    const result = [];
    const filtersType = value;

    if (filterSelected === LogLevels.OFF) {
      value = [];
      return value;
    }

    filtersType.forEach((item) => {

      if (item.level === filterSelected) {
        result.push(item);
      }
    });
    return result;
  }
}

