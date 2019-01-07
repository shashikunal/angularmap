import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatDialogModule} from '@angular/material';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import {AgmCoreModule} from '@agm/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAjUHpiDhHJwK0vCMayeOTvEB08RXI1YCg',
      libraries:['places']
    }) 
  ],
  entryComponents:[
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
