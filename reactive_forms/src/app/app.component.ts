import { Component } from '@angular/core';
import {  NgForm, Validators } from '@angular/forms';
import { FormGroup , FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'reactive_forms';

  form: any;

  constructor(){

    this.form=new FormGroup({
      fullName: new FormControl('', [
        Validators.required, Validators.minLength(3), Validators.maxLength(15)
      ]),
      email: new FormControl('',[
        Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')
      ]),
      
      contactDetails: new FormGroup({
          address: new FormControl('',[
            Validators.required
          ]),
          shippingAddress : new FormControl('',[
            Validators.required
          ]),
          contactNo: new FormControl('',[
            Validators.required, Validators.pattern('[0-9]{10}')
            ]),
      })

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

  onSubmit(){
    console.log(this.form.value);
  }

}
