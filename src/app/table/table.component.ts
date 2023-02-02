import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort} from "@angular/material/sort";
import { faSearch } from '@fortawesome/free-solid-svg-icons';



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
  faSearch = faSearch;
 
  @ViewChild(MatSort) matSort!:MatSort
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  originalData!:any
  displayedColumns = ['carName', 'cardId'];
  dataSource!:MatTableDataSource<any>;
  data!:any
  dataArr:any[] =[]
  filteredData: any[] = [];
  userFuelHistories:any
  expandedElement:any;
  user:any;
  test =true
 

  constructor(private http:HttpService,private router:Router,private builder: FormBuilder,private activatedRoute:ActivatedRoute){};

  ngOnInit(): void {
   this.activatedRoute.params.subscribe((params:any) => {
    this.user = params;
    const userName = this.user.userName;
    const password = this.user.password;
});
this.getDataForDisplay()
  }

  getDataForDisplay(){
    this.http.GetallData().subscribe((res:any) =>{
      this.test = false;
      for(let i=0; i<res.length;i++){

        res[i].userFuelHistories.map((history:any) => {
          history.dateOfFill = history.dateOfFill.replace("T", " ");

        });

        res[i].userFuelHistories.sort((a:any,b:any) => {
          let dateA = Date.parse(a.dateOfFill);
          let dateB = Date.parse(b.dateOfFill);
          return dateB - dateA;
        });
      }

      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator;
    })
  }

  @ViewChild('focus', { read: ElementRef })
  tableInput!: ElementRef;
scrollUp(): void {
    setTimeout(() => this.tableInput.nativeElement.scrollIntoView({ behavior: 'smooth', block: "end" }));
}

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

}
