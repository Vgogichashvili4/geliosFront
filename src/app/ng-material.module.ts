import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';





@NgModule({
  imports: [
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatListModule,
    MatSortModule,
    MatProgressSpinnerModule


],
  exports: [
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatListModule,
    MatSortModule,
    MatProgressSpinnerModule


  ]
})
export class NgMaterialModule { }
