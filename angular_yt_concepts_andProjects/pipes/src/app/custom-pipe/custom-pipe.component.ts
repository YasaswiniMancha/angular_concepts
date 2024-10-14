import { Component, Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'customPipe'})

export class CustomPipe implements PipeTransform {

  transform(value: any, args? : any) {
      return "City Name: " + value ;
  }

}

