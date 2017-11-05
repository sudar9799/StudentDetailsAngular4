import { Injectable } from '@angular/core'
import { StudentDetails, EnrollmentHistoryDetails, AssignmentHistoryDetails } from '../../entities/studentdetails.entities'
// import { Session } from '../../globals'
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router'

@Injectable()
export class StudentService {

    getAllStudents: string = `http://interviewapi20170221095727.azurewebsites.net/api/Student/All`
    getStudentEnrollmentHistory: string = `http://interviewapi20170221095727.azurewebsites.net/api/Student/EnrollmentHistory`
    getStudentAssignmentHistory: string = `http://interviewapi20170221095727.azurewebsites.net/api/Student/AssignmentHistory`

    results: StudentDetails[];
    enrollmentHistory: EnrollmentHistoryDetails[];
    assignmentHistory: AssignmentHistoryDetails[];

    username: string = 'authentica';
    password: string = '@uth3nt1c@';
    headers = new Headers();

    constructor(private http: Http, private _router: Router) {
        this.results = [];
        this.enrollmentHistory = [];
        this.assignmentHistory = [];
    }

    getStudentDetails() {

        this.headers.append("Authorization", "Basic " + btoa(this.username + ":" + this.password));
        this.headers.append("Content-Type", "application/json");

        let options = new RequestOptions({ headers: this.headers });

        return new Promise((resolve, reject) => {
            this.results = [];
            this.http.get(this.getAllStudents, options)
                .toPromise()
                .then(
                res => {
                    this.results = res.json().map(item => {

                        return new StudentDetails(
                            item.studentId,
                            item.firstName,
                            item.lastName,
                            item.grade,
                            item.schoolName
                        );

                    });
                    resolve();
                },
                msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
                );
        });
    }

    getEnrollmentHistory(studentId) {
        console.log("getEnrollmentHistory", studentId);
        this.headers.append("Authorization", "Basic " + btoa(this.username + ":" + this.password));
        this.headers.append("Content-Type", "application/json");

        let options = new RequestOptions({ headers: this.headers });
        let apiURL = this.getStudentEnrollmentHistory + '?studentId=' + studentId;
        console.log("getEnrollmentHistory", apiURL);
        return new Promise((resolve, reject) => {
            this.enrollmentHistory = [];
            this.http.get(apiURL, options)
                .toPromise()
                .then(
                res => {
                    this.enrollmentHistory = res.json().map(item => {
                        // console.log(res.json());
                        return new EnrollmentHistoryDetails(
                            item.entryDate,
                            item.exitDate,
                            item.exitReason
                        );

                    });
                    resolve();
                },
                msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
                );
        });
    }

    getAssignmentHistory(studentId) {

        this.headers.append("Authorization", "Basic " + btoa(this.username + ":" + this.password));
        this.headers.append("Content-Type", "application/json");

        let options = new RequestOptions({ headers: this.headers });
        let apiURL = this.getStudentAssignmentHistory + '?studentId=' + studentId;

        return new Promise((resolve, reject) => {
            this.enrollmentHistory = [];
            this.http.get(apiURL, options)
                .toPromise()
                .then(
                res => {
                    this.assignmentHistory = res.json().map(item => {

                        return new AssignmentHistoryDetails(
                            item.assignmentName,
                            item.dueDate,
                            item.maxScore,
                            item.completionDate,
                            item.scoreEarned
                        );

                    });
                    resolve();
                },
                msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
                );
        });
    }
}