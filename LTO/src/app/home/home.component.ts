import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AppSettings } from '../../models/app-settings';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private loginForm = new FormGroup({
        userName: new FormControl(''),
        passWord: new FormControl(''),
    });
    private appSettings = new AppSettings();

    constructor() { }

    ngOnInit(): void{ }

    public loginClick(): void{
        this.appSettings.setCurrentUser(this.loginForm.value.userName);
        console.log(this.appSettings.getCurrentUser())
    }
}
