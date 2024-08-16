  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({name: 'filterPipe'})

  export class FilterPipe implements PipeTransform {
    transform(value: string, length:number):unknown {
        if(!length){
            length=20
        }
        return value.substring(0,length);
    }
  }


