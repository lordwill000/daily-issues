import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'derpPipe'
})
export class DerpPipePipe implements PipeTransform {

  transform(value: any, args: any[] = null): any {

    return Object.keys(value).map(function (key) {
      const pair = {};
      const k = 'key';
      const v = 'value'


      pair[k] = key;
      pair[v] = value[key];

      return pair;
    });
  }

}