import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'task_on_directives';

  name: string;
  email: string;
  address: string;

  userArray: Array<any>=[];

  constructor(){}

  onClick(){
    this.userArray.push({
      name: this.name,
      email: this.email,
      address: this.address
    });
    console.log(this.userArray);
  }

  deleteUser(user){
    this.userArray = this.userArray.filter(u => u!== user);
    console.log(this.userArray);
  } //or

  //onDelete(index){
  // this.uSerArray.splice(index, 1);
  //}

  

}


