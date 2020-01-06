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

    constructor(private logInService: LoginService) { }

    ngOnInit() {
        
    }

    public logOut(): void{
        this.logInService.logInCheck = false;
    }
}
