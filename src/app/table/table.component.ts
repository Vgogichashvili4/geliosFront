import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class TableComponent implements OnInit{
  panelOpenState = false;
  response:any = []
  allData:any[] = []
  @ViewChild(MatSort) matSort!:MatSort
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  originalData!:any
  displayedColumns:any = ['distance', 'dateOfFill'];
  dataSource!:MatTableDataSource<any>;
  data!:any
  dataArr:any[] =[]
  displayCount = 5;
  filterString: string = '';
  filteredData: any[] = [];
  filterText: any;
  userFuelHistories:any
  user:any

  constructor(private http:HttpService,private router:Router,private builder: FormBuilder,private activatedRoute:ActivatedRoute){};

  ngOnInit(): void {
   this.activatedRoute.params.subscribe((params:any) => {
    this.user = params;
    const userName = this.user.userName;
    const password = this.user.password;
});

  }

  getDataForDisplay(){
    this.http.GetallData(this.user).subscribe((res:any) =>{
      for(let i=0; i<res.length;i++){
     
        res[i].userFuelHistories.map((history:any) => {
          history.dateOfFill = history.dateOfFill.replace("T", " ");
        });

        res[i].userFuelHistories.sort((a:any,b:any) => {
          let dateA = Date.parse(a.dateOfFill);
          let dateB = Date.parse(b.dateOfFill);
          return dateB - dateA;
        });

        this.dataArr.push(res[i].userFuelHistories);
      }

      this.dataSource = new MatTableDataSource(res);
      this.data = res
      this.filteredData = res
      
      this.originalData = this.data;
      this.originalData = res;
     
    })
  }
  filterData() {
    this.filteredData = this.data.filter((item:any) =>
      item.carName.includes(this.filterString) || item.cardId.includes(this.filterString)  
    ); 
  }






}
