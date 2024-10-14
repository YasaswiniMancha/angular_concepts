import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

  @Input() fromPostComp:string;  //we are accessing (string interpolation)the fromPostComp property using @Input decorator
  //now look at the postlist html

  constructor(){}

  ngOnInit(): void {}

}
