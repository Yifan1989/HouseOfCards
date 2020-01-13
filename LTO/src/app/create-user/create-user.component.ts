import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

    constructor(private logInService: LoginService) { }

    ngOnInit() {
    }
    
    private backToHome(): void{
        this.logInService.homeOrCreateUser = true;
    }
}
