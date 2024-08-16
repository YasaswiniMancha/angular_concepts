import { Component, OnInit } from '@angular/core';
import { SinglePostComponent } from '../single-post/single-post.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

  posts = [

    { id: 1, title: 'title1', content: 'Its is a dummy text and typesetting industry' },
    { id: 2, title: 'title2', content: 'Its is a dummy text and typesetting industry' },
    { id: 3, title: 'title3', content: 'Its is a dummy text and typesetting industry' },
    { id: 4, title: 'title4', content: 'Its is a dummy text and typesetting industry' },
    { id: 5, title: 'title5', content: 'Its is a dummy text and typesetting industry' },

  ]


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(value => {
      const page = value.get('page');
      const order = value.get('orderBy');
      console.log('Page:', page);
      console.log('Order:', order);
    })

  }

}
