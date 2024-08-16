import { Component, ViewChild, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { AppNavbar } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'ang_app';
  parentMessage : string= 'message from parent (app component) via post component using @Input' ;  //we need to make this variable accessed by post component
  // for passing data from parent(app) to child component(post) we need the string interpolation so using @Input decorator 
  //now go to the app.component.html file and refer it


  message:string
@ViewChild(PostComponent) childComp; //given a random name childComp

constructor(private cdref: ChangeDetectorRef ){
     console.log(this.childComp); //undefined 
   }
    //to lock the current value of childComp property putin in console


   ngAfterViewInit(){
     console.log(this.childComp); 
     this.message = this.childComp.childMessage; //This line assigns the value of childComp.childMessage to the message property of the current component instance.
     this.cdref.detectChanges();
     //you have to tell angular that you updated the content after ngAfterContentChecked you can import ChangeDetectorRef from @angular/core and call detectChanges
   }
   //now check the app html


   
messageFromPost:string
receiveMessage($event: string) {
  this.messageFromPost = $event;
}//now got to app html


  
}








