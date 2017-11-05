import { Injectable } from '@angular/core'
import { User } from '../../entities/home.entities'
import { Router } from '@angular/router'
// import { Session } from '../../globals';

@Injectable()
export class HomeServices {
    serviceName: string = ""
    username: string = "";
    password: string = "";

    constructor(private _router: Router) {
        this.serviceName = "";
        console.log("Home Service Created");
    }

    signInToApp(user: User): boolean {
        if (user.username == "sudar" && user.password == "123") {
            localStorage.setItem("isAuthenticated", 'true');
            localStorage.setItem("userName", user.username);
            
            this._router.navigate(['studentdetails'])
            return true;
        }
        return false;
    }
}