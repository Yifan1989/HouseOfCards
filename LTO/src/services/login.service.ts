import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    public logInCheck: boolean = false;
    public userName: string;
    
    public testSubject = new Subject<number>();
    
    constructor() {}

    public getResults(): boolean{
        return this.logInCheck;
    }
}
