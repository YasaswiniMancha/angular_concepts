import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template_driven_forms';

  onSubmit(templateVariableName: NgForm){
    console.log(templateVariableName)
  }

  getValue(templateVariableName: FormControl){
    console.log(templateVariableName);
  }

}
