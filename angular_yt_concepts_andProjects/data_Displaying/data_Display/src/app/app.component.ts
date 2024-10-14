import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data_Display';
  message: string='Message from app ts';
  imgUrl='https://media.istockphoto.com/id/1335845017/photo/pink-blooming-lotus-close-up.jpg?s=1024x1024&w=is&k=20&c=cfd4sF8c16DfhB2FBwVcs5jE_Wk6xQy8e4bU4uuJD0I=';
  textValue:string="value from component"

  bool:boolean=true;

buttonClick(){
  console.log("button was clicked, event worked")
    }

    keyUp(){
      console.log(this.textValue);
    }

}
