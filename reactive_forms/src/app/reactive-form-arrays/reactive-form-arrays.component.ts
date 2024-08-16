import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-arrays',
  templateUrl: './reactive-form-arrays.component.html',
  styleUrl: './reactive-form-arrays.component.css'
})
export class ReactiveFormArraysComponent {
     
  form: any;

  constructor(){

    this.form=new FormGroup({
      
      fullName: new FormControl('', [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(15)
      ]),
      email: new FormControl('',[
        Validators.required, 
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')
      ]),
      
      contactDetails: new FormGroup({
          address: new FormControl('',[
            Validators.required
          ]),
          shippingAddress : new FormControl('',[
            Validators.required
          ]),
          contactNo: new FormControl('',[
            Validators.required,
            Validators.pattern('[0-9]{10}')
            ]),
      }),
     
      skills: new FormArray([])
      
    });
  }

  get fullname(){
    return this.form.get('fullName');
  }

  get Email(){
    return this.form.get('email');
  }

  get Address(){
    return this.form.get('contactDetails.address');
  }

  get ShippingAddress(){
    return this.form.get('contactDetails.shippingAddress');
  }

  get Contact(){
    return this.form.get('contactDetails.contactNo');
  }

  get Skills(){
    return this.form.get('skills') as FormArray;
  }

  onSubmit(){
    console.log(this.form.value);
  }

  addSkills(skills: HTMLInputElement){
    this.Skills.push(
      new FormControl(skills.value));
      
      skills.value='';

      console.log(this.form.value);
  }


  removeSkills(i){
    this.Skills.removeAt(i);
    console.log(this.form.value);

  }

}
