import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    public logInCheck: boolean = false;
    

    public loginInStatus = new BehaviorSubject<string>("a user");
    public currentUser = this.loginInStatus.asObservable();
    
    constructor() {}

    public getResults(): boolean{
        return this.logInCheck;
    }

    public setCurrentUser(user: string): void{
        
    }
}
