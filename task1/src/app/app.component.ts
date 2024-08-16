import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'task1';

  postTitle: string;
  postDetails: string;
  imageUrl:string;
  postURL:string;
  addBackround:boolean = false
  
}
