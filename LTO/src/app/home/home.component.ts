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
        console.log(this.loginForm.value.userName);
        console.log(this.loginForm.value.passWord);
        console.log(this.appSettings.getExample());
    }
}
