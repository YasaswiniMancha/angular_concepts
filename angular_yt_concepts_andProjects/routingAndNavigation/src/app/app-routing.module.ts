import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';


const routes:Routes=[
  
    { path: '', component: HomeComponent},
    { path: 'posts', component: PostListComponent },
    { path: 'post/:id/:title', component: SinglePostComponent},
    { path: '**', component: FournotfourComponent} //for urls that are not exist
]

@NgModule({

  imports:[
    RouterModule.forRoot(routes)
  ],
  
  exports:[RouterModule]

})
export class AppRoutingModule { }
