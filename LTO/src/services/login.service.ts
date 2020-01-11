import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private logInCheck: boolean = false;
    private currentUserName: string = "";
    

    //public loginInStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    constructor() {}

    public getLogInCheck(): boolean{
        return this.logInCheck;
    }

    public setLogInCheck(checkLogin: boolean): void{
        this.logInCheck = checkLogin;
    }
    
    public getUserName(): string{
        return this.currentUserName;
    }

    public setUserName(user: string): void{
        this.currentUserName = user;
    }
}
