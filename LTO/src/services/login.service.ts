import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    public logInCheck: boolean = false;
    constructor() {}
}
