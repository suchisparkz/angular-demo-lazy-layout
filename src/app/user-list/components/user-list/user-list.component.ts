import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { delay } from 'rxjs/operators';
import { User } from '../../../shared/User';
import { UserCache } from '../../service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'firstName', 'lastName'];
    dataSource;
    isLoading: boolean;

    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private readonly userService: UserCache) {
    }

    ngOnInit(): void {
        this.isLoading = true; // Loading for the spinner inside table
        // data comes quickly, so added a delay to see the spinner
        this.userService.getUsers().pipe(delay(1000))
            .subscribe((data: User[]) => {
                this.isLoading = false;
                this.dataSource = new MatTableDataSource(data);
                this.dataSource.sort = this.sort;
        });
    }
}
