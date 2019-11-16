import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    userForm: FormGroup;
    constructor(private readonly fb: FormBuilder) {}
    initUserForm(): void {
        this.userForm = this.fb.group({
            'firstName': ['', [Validators.required]],
            'lastName': ['', [Validators.required]],
            'id': ['', [Validators.required]]
        });
    }
    ngOnInit(): void {
        this.initUserForm();
    }
    resetUserForm(): void {
        this.initUserForm();
    }
}
