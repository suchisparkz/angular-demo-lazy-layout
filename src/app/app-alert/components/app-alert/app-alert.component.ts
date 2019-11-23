import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-alert',
    templateUrl: './app-alert.component.html'
})
export class AppAlertComponent implements OnInit {

    constructor(private readonly _snackBar: MatSnackBar) {}

    ngOnInit(): void {
        this._snackBar.open('User Creation Form', '', { duration: 9000 });
    }

}