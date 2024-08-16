import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

export class FormsComponent {

  onSubmit(templateVariableName: NgForm){
    console.log(templateVariableName.value)
  }
 
  getValue(templateVariableName: FormControl){
    console.log(templateVariableName);
  }

}
