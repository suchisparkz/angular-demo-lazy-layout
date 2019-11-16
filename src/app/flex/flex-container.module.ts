import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { FlexContainerComponent } from './flex-container.component';

@NgModule({
    declarations: [FlexContainerComponent],
    entryComponents: [FlexContainerComponent],
    imports: [
        CommonModule,
        CdkTableModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule
    ],
    exports: [FlexContainerComponent]
})
export class FlexContainerModule {

}
