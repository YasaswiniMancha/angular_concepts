import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

       title :string="List of posts";    //typescript

       @Input() fromParent :string;   
       //here we have accessed the fromParent(i.e, parentMessage) property of the parent component , now bind it with post.component.html


       

       messageFromPost: string = 'message from Post component via postList component using @Input'; // we need to make this variable get accessible by the post-list component(child comp)using @Input , so got to post html

       

       childMessage:string ='from post component(child) to app component(parent) using @ViewChild'; // we need to make this variable get accessible by its parent component App using @ViewChild decorator
       //now got to app component and see
      




      messageFromPostToApp:string ='message from post component(child) to app component(parent) using @Output and event emitter'

      @Output() messageEvent = new EventEmitter<string>(); //creating an event emitter to communicate from child to parent component

      sendMessageToApp() {
        this.messageEvent.emit(this.messageFromPostToApp); //emitting the event with the message from post component
      }    //now go to post html





      
      //Here we are listening to the messageEvent from post component(child) and printing it in the console
      //now go to app html

      constructor(){}

      ngOnInit(): void {
    
      }

      
}
