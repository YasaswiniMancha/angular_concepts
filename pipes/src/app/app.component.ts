import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'pipes';

  count:number = 123456;

  decimalNum:number=2.3456;

  price:number = 53123456;

  today:Date = new Date();

  postObj:object={
    id:1,
    title:'post1',
    content:'post content'
  }

  userDetails={
    name:'John Doe',
    age:30,
    email:'john@example.com',
    city:'Hyderabad'
  }

  postArray: Array<string> = [
    "post1", "post2", "post3", "post4" , "post5" , "post6" , "post7"
  ];

  dummyText:string ="In Angular, pipes are a powerful feature that allow you to transform data in your templates. They are typically used to format values, such as dates, numbers, or strings, but they can also be used to perform more complex data transformations."

  constructor(){}

}
