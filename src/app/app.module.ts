import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgMaterialModule } from './ng-material.module';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgMaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
