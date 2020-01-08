import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-bottom',
    templateUrl: './nav-bottom.component.html',
    styleUrls: ['./nav-bottom.component.css']
})
export class NavBottomComponent implements OnInit {
    private checkNum: number = 1;
    constructor() {}
    ngOnInit() {}



    private firstMethod(): void{
        console.log("first method");

        this.checkNum = this.checkNum - 1;
        this.secondMethod();
    }

    private secondMethod(): void{
        console.log("second method");
        if(this.checkNum != 0){
            console.log("retrieveShipments");
        }
        this.checkNum = this.checkNum + 1;
    }
}
