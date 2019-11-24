import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/User';
import { UserService } from 'src/app/services';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    userForm: FormGroup;
    addUser(): void {
        const userData: User = this.userForm.value;
        this.userService.addUser(userData)
            .subscribe(data => {
                this.initUserForm();
            });
    }
    constructor(private readonly fb: FormBuilder, private userService: UserService) {}
    initUserForm(): void {
        this.userForm = this.fb.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            id: ['', [Validators.required]]
        });
    }
    ngOnInit(): void {
        this.initUserForm();
    }
    resetUserForm(): void {
        this.initUserForm();
    }
}
