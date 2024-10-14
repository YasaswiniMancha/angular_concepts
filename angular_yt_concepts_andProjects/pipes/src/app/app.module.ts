import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipe } from './custom-pipe/custom-pipe.component';
import { FilterPipe } from './custom-pipe-withArgs/customPipeWithArgs';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
