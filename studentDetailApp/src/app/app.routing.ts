import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './student-app/components/home/home.component'
import { StudentDetailComponent } from './student-app/components/studentdetails/studentdetails.component';
import { EnrollmentDetailsComponent } from './student-app/components/enrollmentDetails/enrollmentDetails.component';
import { AssignmentHistoryComponent } from './student-app/components/assignmentHistory/assignmentHistory.component';

export const customRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'studentdetails', component: StudentDetailComponent },
    { path: 'enrollmenthistory', component: EnrollmentDetailsComponent },
    { path: 'assignmenthistory', component: AssignmentHistoryComponent },
    { path: '**', component: HomeComponent }
];
export const studentDetailsAppRouting = RouterModule.forRoot(customRoutes);