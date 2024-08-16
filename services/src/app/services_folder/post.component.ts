import { Component, OnInit } from "@angular/core";
import { PostService } from "./post.service";
import { Post } from "../models/post"; 

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrl : './post.component.css'
})

export class PostComponent implements OnInit {

    posts: Array<any>;

    constructor(private postService: PostService) {

    this.posts = postService.postList;  //this is better way, but need to give providers above
        
        // let  postService = new PostService()
        // this.posts = postService.postList;
     }   //this is traditional way of implementing services
    
    ngOnInit(): void { }

    addNewData(){
        let newPost : Post={
            id:7,
            title:'post6'
        }
      this.postService.addPost(newPost);
    }

}