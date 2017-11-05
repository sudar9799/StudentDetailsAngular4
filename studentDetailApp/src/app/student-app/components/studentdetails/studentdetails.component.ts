import { Component } from '@angular/core'
import { StudentService } from '../../services/studentdetails/student.services'
import { StudentDetails } from '../../entities/studentdetails.entities'
import { Router } from '@angular/router'
// import { Session } from '../../globals';

// import { User, NewUser } from '../../services/home/home.entities'

@Component({
    selector: 'app-studentdetails',
    templateUrl: './studentdetails.component.html',
    providers: [StudentService]
})
export class StudentDetailComponent {
    public userName: string;
    public studentDetails: StudentDetails;

    constructor(public studentServices: StudentService, private _router: Router) {

    }

    ngOnInit() {
        localStorage.setItem('selectedStudent', '');
        if (localStorage.getItem('isAuthenticated') == 'true') {
            this.userName = localStorage.getItem('userName');
            this.studentServices.getStudentDetails();
        }
        else {
            this._router.navigate(['/'])
        }
    }
    getEnrollmentHistory() {
        this._router.navigate(['enrollmenthistory'])
    }

    getAssignmentHistory() {
        this._router.navigate(['assignmenthistory'])
    }

    setSelectedStudent(student) {
        localStorage.setItem('selectedStudent', JSON.stringify(student));
    }
}