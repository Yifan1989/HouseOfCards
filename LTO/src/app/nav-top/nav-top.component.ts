import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../models/app-settings';

@Component({
    selector: 'app-nav-top',
    templateUrl: './nav-top.component.html',
    styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
    private appSettings = new AppSettings();
    private userLoggedIn: boolean = true;

    constructor() { }

    ngOnInit() {
        
    }

    public logOut(): void{

    }
}
