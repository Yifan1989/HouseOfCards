import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AppSettings } from '../../models/app-settings';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private isUserLogin: boolean;

    private loginForm = new FormGroup({
        userName: new FormControl(''),
        passWord: new FormControl(''),
    });
    private appSettings = new AppSettings();

    constructor(private logInService: LoginService){ 
        this.logInService.logInCheck.subscribe(value => {
            this.isUserLogin = value;
        })
    }

    ngOnInit(): void{ }

    public loginClick(): void{
        this.appSettings.setCurrentUser(this.loginForm.value.userName);
        console.log(this.appSettings.getCurrentUser());
        this.logInService.logInCheck.next(true);
    }

    public logOutClick(): void{
        this.logInService.logInCheck.next(false);
    }
}
