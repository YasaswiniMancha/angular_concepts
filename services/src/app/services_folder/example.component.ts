import { Component, OnInit } from "@angular/core";
import { PostService } from "./post.service";
import { ExampleService } from "./example.service";

@Component({
    selector: 'app-example-post',
    templateUrl : './example.component.html',
    styleUrl : './example.component.css'
})

export class ExampleComponent implements OnInit {

    posts: Array<any>;

     constructor( private exampleService: ExampleService ) {
          this.posts = exampleService.postList;
     }
     ngOnInit(): void { }

}