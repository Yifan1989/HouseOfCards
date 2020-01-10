import { sharedStylesheetJitUrl } from '@angular/compiler';
import { OnInit, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';


export class AppSettings implements OnInit {
    private exampleVariable: string = 'Frank Underwood';
    private currentUserName: string;
    public checkCurrentUser: boolean = false;

    

    constructor() { }

    ngOnInit(): void{ }

    public getExample(): string{
        return this.exampleVariable;
    }

    public getCurrentUser(): string{
        return this.currentUserName;
    }

    public setCurrentUser(name: string): void{
        this.currentUserName = name;
        this.checkCurrentUser = true;
    }

    public getCheckCurrentUser(): boolean{
        return this.checkCurrentUser;
    }
}
