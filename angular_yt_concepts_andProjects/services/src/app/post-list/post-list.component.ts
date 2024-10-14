import { Component, OnInit } from '@angular/core';
import { PostService } from '../services_folder/post.service';
import { ExampleService } from '../services_folder/example.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'

})
export class PostListComponent implements OnInit{

  postList: Array<any>;
  exampleList: Array<any>;

  constructor(private postService : PostService, exampleService: ExampleService){
    
    this.postList= postService.postList;
    this.exampleList= exampleService.postList;
    console.log("postService:",postService.postList);
    console.log("example post:",exampleService.postList)

  }


  ngOnInit(): void{}

}
