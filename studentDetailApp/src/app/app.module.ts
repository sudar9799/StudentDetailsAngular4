import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './student-app/components/home/home.component';
import { StudentDetailComponent } from './student-app/components/studentdetails/studentdetails.component';
import { EnrollmentDetailsComponent } from './student-app/components/enrollmentDetails/enrollmentDetails.component';
import { AssignmentHistoryComponent } from './student-app/components/assignmentHistory/assignmentHistory.component';
import { FormsModule } from '@angular/forms';
import { studentDetailsAppRouting } from './app.routing';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentDetailComponent,
    EnrollmentDetailsComponent,
    AssignmentHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    studentDetailsAppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
