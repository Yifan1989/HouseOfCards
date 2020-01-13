import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-nav-left',
    templateUrl: './nav-left.component.html',
    styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent implements OnInit {

    constructor(private logInService: LoginService) { }

    ngOnInit() {
    }

    public navigateAccount(): void{
        this.logInService.showAccount = true;
        this.logInService.showContact = false;
        this.logInService.showDashboard = false;
    }

    public navigateDashboard(): void{
        this.logInService.showAccount = false;
        this.logInService.showContact = false;
        this.logInService.showDashboard = true;
    }

    public navigateContact(): void{
        this.logInService.showAccount = false;
        this.logInService.showContact = true;
        this.logInService.showDashboard = false;
    }

}
