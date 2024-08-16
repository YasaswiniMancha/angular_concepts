import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directives';

  postArray1: Array<string> =  ['post1', 'post2', 'post3', 'post4', 'post5'];  //NgFor for array

  postArray: Array<string> =  ['post1', 'post2', 'post3', 'post4', 'post5'];  //NgFor for array

  objArray: Array<object> = [
    { id: 1, postTitle:'post1'} ,
    { id: 2, postTitle:'post2'},
    { id: 3, postTitle:'post3'},
    { id: 4, postTitle:'post4'},
    { id: 5, postTitle:'post5'}
    ]   //NgFor for object array
  
  constructor(){
    for(let i = 0; i < this.postArray.length; i++){
      console.log(this.postArray[i])
    }
  }
   // ngFor directive
   // *ngFor="let post of postArray"  - this will loop through the array and print each element in the console

   
deleteArrElement(index: number){
  this.postArray.splice(index, 1);
}


   addNew(){
    this.postArray.push('new post'+ (this.postArray.length + 1));
   }

   onDelete(){
    let index=this.objArray.indexOf(this.postArray)
    this.objArray.splice(index,1);
  }

  onDelete1(post: object){
    let index=this.objArray.indexOf(post)
    this.objArray.splice(index,1);
  }

  addNewArrObj(){
    this.objArray.push({ id: 6, postTitle:'new post'+ (this.objArray.length + 1)})
  }


}
