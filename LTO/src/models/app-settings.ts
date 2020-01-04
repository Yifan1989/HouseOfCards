import { sharedStylesheetJitUrl } from '@angular/compiler';
import { OnInit } from '@angular/core';


export class AppSettings implements OnInit {
    // public resultValue: string;
    private exampleVariable: string = 'Frank Underwood';

    constructor() { }

    ngOnInit(): void{ }

    public getExample(): string{
        // this.resultValue = this.exampleVariable;
        return this.exampleVariable;
    }
}
