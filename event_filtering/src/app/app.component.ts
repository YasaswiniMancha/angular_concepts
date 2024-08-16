import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'event_filtering';

  bool:boolean=true;

  userName:string;

  buttonClick(){
    console.log('Button click event worked')
  }

  onkeyUp($event){
    console.log($event.keyCode)
    if($event.keyCode==13){
      console.log("Enter key pressed ")
    }
  }

  onKey1($event){
    console.log($event.target.value)
    console.log("Enter key pressed ")
  }

  onKey(username: string){
    console.log(username);
    console.log("Enter key pressed ")
  }
  onKey2(){
    console.log(this.userName);
    console.log("Enter key pressed ")
  }

}
