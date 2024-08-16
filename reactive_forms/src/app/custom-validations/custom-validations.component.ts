import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpaceValidatorClass } from './validators/no-space.validators';


@Component({
  selector: 'app-custom-validations',
  templateUrl: './custom-validations.component.html',
  styleUrl: './custom-validations.component.css'
})
export class CustomValidationsComponent {

  form:any;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            username: ['',[
              Validators.required,
              Validators.minLength(7),
              noSpaceValidatorClass.noSpaceValidationsMethod
            ]],
            password: ['',[
              Validators.required,
              Validators.minLength(8)
            ]],
        });
    }

    get fc(){
      return this.form.controls;
    }

    get UserName(){
      return this.fc.username;
    }

}
