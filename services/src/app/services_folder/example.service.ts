import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ExampleService {
    
        postList: Array<any> = [
            {id:1, title:'post1'},
            {id:2, title:'post2'},
            {id:3, title:'post3'},
            {id:4, title:'post4'},
            {id:5, title:'post5'}
        ]

  }
  