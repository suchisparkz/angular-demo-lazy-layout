import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';

@NgModule({
    declarations: [UserListComponent],
    entryComponents: [],
    imports: [
        CommonModule,
        CdkTableModule,
        FlexLayoutModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        UserListRoutingModule
    ],
    exports: [UserListComponent]
})
export class UserListModule {
}
