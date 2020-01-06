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

    private loginForm = new FormGroup({
        userName: new FormControl(''),
        passWord: new FormControl(''),
    });
    private appSettings = new AppSettings();

    constructor(private logInService: LoginService){
    }

    ngOnInit(): void{ }

    public loginClick(): void{
        this.logInService.logInCheck = true;
    }

    public logOutClick(): void{
        this.logInService.logInCheck = false;
    }
}
