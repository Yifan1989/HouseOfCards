import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AppSettings } from '../../models/app-settings';
import { LoginService } from '../../services/login.service';
import { NavTopComponent } from '../nav-top/nav-top.component';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    private currentUser: string;
    private subUserInfor: Subscription;

    private checkUserLogin: boolean = false;
    

    private loginForm = new FormGroup({
        userName: new FormControl(''),
        passWord: new FormControl(''),
    });
    private appSettings = new AppSettings();

    constructor(private logInService: LoginService){
        
    }

    ngOnInit(): void{ }

    ngOnDestroy(): void{
        //if(this.subUserInfor) this.subUserInfor.unsubscribe();
    }

    public loginClick(): void{
        let user = this.loginForm.value.userName;
        this.logInService.setLogInCheck(true);
        this.logInService.setUserName(user);  
    }

    public logOutClick(): void{
        this.logInService.setLogInCheck(false);
    }

    public getShipments(): void{
        console.log(this.loginForm.value.userName);
    }
}
