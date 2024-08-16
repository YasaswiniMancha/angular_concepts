import { Component } from '@angular/core';

@Component({
  selector: 'app-step-forms',
  templateUrl: './step-forms.component.html',
  styleUrl: './step-forms.component.css'
})

export class StepFormsComponent {
  
  stepForm: string;

  onClick( status:string){
    this.stepForm= status
  }

}
