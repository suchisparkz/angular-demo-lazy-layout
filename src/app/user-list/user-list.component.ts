import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { UserService } from './user-service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'firstName', 'lastName'];
    dataSource: any;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    constructor(private readonly userService: UserService) {
    }
    ngOnInit(): void {
        this.userService.getUsers()
            .subscribe(data => {
                this.dataSource = new MatTableDataSource(data);
                this.dataSource.sort = this.sort;
            });
    }
}
