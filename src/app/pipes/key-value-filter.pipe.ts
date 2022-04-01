import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValueFilter',
  pure: false
})
export class KeyValueFilterPipe implements PipeTransform {

  transform(value: any, ..._args: any[]) {
    
  let result = [];
    
    if(value.entries) {
      for (var [key, value] of value.entries()) {
        result.push({ key, value });
      }
    } 
    else {
      result = (value['data'])
    }

    return result;
  }

}
