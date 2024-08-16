import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsComponent } from '../../../template_driven_forms/src/app/forms/forms.component';
import { ReactiveFormArraysComponent } from './reactive-form-arrays/reactive-form-arrays.component';
import { FormBuildersComponent } from './form-builders/form-builders.component';
import { CustomValidationsComponent } from './custom-validations/custom-validations.component';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ReactiveFormArraysComponent,
    FormBuildersComponent,
    CustomValidationsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
