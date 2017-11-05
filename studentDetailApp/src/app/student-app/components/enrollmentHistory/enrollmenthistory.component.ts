// import { Component } from '@angular/core'
// import { StudentService } from '../../services/studentdetails/student.services'
// import { StudentDetails, EnrollmentHistoryDetails } from '../../entities/studentdetails.entities'
// import { Session } from 'globals'

// @Component({
//     selector: 'app-enrollmenthistory',
//     templateUrl: './enrollmenthistory.component.html',
//     providers: [StudentService]
// })
// export class EnrollmentHistoryComponent {
//     public userName: string = "";
//     public studentDetails: StudentDetails;
//     id: number;
//     private sub: any;

//     constructor(private studentServices: StudentService) {

//     }

//     ngOnInit() {
//         console.log("Enrollment Status called");
//         let studentID = JSON.parse(localStorage.getItem('selectedStudent')).studentId;
//         console.log("studentID" + studentID);
//         this.studentServices.getEnrollmentHistory(studentID);

//     }

// }