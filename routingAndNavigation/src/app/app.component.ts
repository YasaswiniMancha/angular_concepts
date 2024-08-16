import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  title = 'routingAndNavigation';

  constructor(private router: Router) { }

  ngOnInit() {
    const obstTest = new Observable((observer) => {
      observer.next('returned from observable');

      observer.next('this is second return from observable');

      setTimeout(() => {
        observer.next('this is from timeout function');
      }, 2000); //asynchronous method

      observer.next('this is third return from observable');
    }).subscribe((value) => {
      console.log(value);
    });

    obstTest.unsubscribe();

    const obsTestFunc = function (){
      return 'Return from Function'
      return 'return 2 from function' //normal function cannot return more than one return statements
    }

  }
 
  
  onSubmit() {
    
    //this.router.navigate(['/post',1,'postTitle' ]);

    this.router.navigate(['/posts'],{ queryParams: {page: 1, order: 'newest'}});
  }

  
}
