import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepFormsComponent } from './step-forms/step-forms.component';
import { NgstyleDirectiveComponent } from './ngclassAndStyle-directive/ngClassAndStyle-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    StepFormsComponent,
    NgstyleDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
