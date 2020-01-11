import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../models/app-settings';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-nav-top',
    templateUrl: './nav-top.component.html',
    styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
    private appSettings = new AppSettings();
    private userLogedIn: boolean = this.logInService.getLogInCheck();
    private currentUserName: string = this.logInService.getUserName();


    constructor(private logInService: LoginService) { }

    ngOnInit() {
        
    }

    public logOut(): void{
        // this.logInService.logInCheck = false;
    }

    public retrieveShipments(): void{
        console.log("if you get me, you win!");
    }
}
