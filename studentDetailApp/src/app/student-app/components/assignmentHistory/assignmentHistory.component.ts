import { Component } from '@angular/core'
import { StudentService } from '../../services/studentdetails/student.services'
import { StudentDetails, AssignmentHistoryDetails } from '../../entities/studentdetails.entities'
import { Router } from '@angular/router'
import { Session } from 'globals'
import { Http } from '@angular/http'

@Component({
    selector: 'app-assignmenthistory',
    templateUrl: './assignmenthistory.component.html',
    providers: [StudentService]
})
export class AssignmentHistoryComponent {
    public userName: string = "";
    public studentDet: any = "";
    public studentName: string = "";
    public studentDetails: StudentDetails;

    constructor(public studentServices: StudentService, private _router: Router) {

    }

    ngOnInit() {
        if (localStorage.getItem('isAuthenticated') == 'true' && localStorage.getItem('selectedStudent') != ""
            && localStorage.getItem('selectedStudent') != undefined) {

            this.studentDet = JSON.parse(localStorage.getItem('selectedStudent'));
            let studentID = this.studentDet.studentId;

            this.studentServices.getAssignmentHistory(studentID);

            this.studentName = this.studentDet.firstname + ',' + this.studentDet.lastname
            this.userName = localStorage.getItem('userName');
            this.studentServices.getStudentDetails();
        }
        else if (localStorage.getItem('isAuthenticated') != 'true') {
            this._router.navigate(['/'])
        }
    }

    getAllStudents() {
        this._router.navigate(['studentdetails']);
    }
}