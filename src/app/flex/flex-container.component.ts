import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { UserService } from './user-service';

@Component({
    selector: 'app-flex-container',
    templateUrl: './flex-container.component.html',
    styleUrls: ['./flex-container.component.css']
})
export class FlexContainerComponent implements OnInit {
    userForm: FormGroup;
    displayedColumns: string[] = ['id', 'firstName', 'lastName'];
    dataSource: any;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    constructor(private readonly fb: FormBuilder,
        private readonly userService: UserService) {
    }
    addUser(): void {
        console.log(this.userForm.value);
    }
    ngOnInit(): void {
        this.initForm();
        this.userService.getUsers()
            .subscribe(data => {
                this.dataSource = new MatTableDataSource(data);
                this.dataSource.sort = this.sort;
            });
    }
    initForm(): void {
        this.userForm = this.fb.group({
            'firstName': ['', [Validators.required]],
            'lastName': ['', [Validators.required]],
            'id': ['', [Validators.required]]
        });
    }
    resetForm(): void {
        this.initForm();
    }
}
