import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './services_folder/post.component';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './services_folder/post.service';
import { ExampleService } from './services_folder/example.service';
import { ExampleComponent } from './services_folder/example.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
