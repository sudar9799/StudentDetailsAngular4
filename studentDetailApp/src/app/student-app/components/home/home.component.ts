import { Component } from '@angular/core';
import { HomeServices } from '../../services/home/home.services'
import { User } from '../../entities/home.entities'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [HomeServices]
})
export class HomeComponent {
    loginStatus: boolean = false;
    public user = new User();

    constructor(private _homeService: HomeServices) {
        localStorage.clear();
    }

    login() {
        if (!this._homeService.signInToApp(this.user)) {
            this.loginStatus = false;
        }
        else
            this.loginStatus = true;
    }
}