import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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

  constructor(private http:HttpService,private router:Router,private builder: FormBuilder){};

  ngOnInit(): void {
   this.getDataForDisplay()
  }

  displayedColumns:any = ['distance', 'dateOfFill'];
  dataSource!:MatTableDataSource<any>;
  data!:any
  dataArr:any[] =[]



  getDataForDisplay(){
    this.http.GetallData().subscribe((res:any) =>{
      for(let i=0; i<res.length;i++){
        console.log(res[i].userFuelHistories)
        res[i].userFuelHistories.map((history:any) => {
          history.dateOfFill = history.dateOfFill.replace("T", " ");
        });
        console.log(res[i].userFuelHistories)
        res[i].userFuelHistories.sort((a:any,b:any) => {
          let dateA = Date.parse(a.dateOfFill);
          let dateB = Date.parse(b.dateOfFill);
          return dateB - dateA;
        });

        this.dataArr.push(res[i].userFuelHistories);
      }

      this.dataSource = new MatTableDataSource(res);
      this.data = res

    })
  }

  createBtnClick(){
    this.router.navigate(['add-user'])
  }


  filterData($event : any){
    this.dataSource.filter = $event.target.value;
}


onAddBtnClick(){
  const block = document.querySelector(".smt")
  block?.classList.remove("smt")

}

userForm = this.builder.group({
  carNumber: this.builder.control('',  [Validators.pattern("[0-9]{0-10}")]),
  cardId: this.builder.control('', Validators.required),
});

saveData(){
  console.log(this.userForm.value)
  this.http.addData(this.userForm.value).subscribe((res:any)=>{
    console.log("added")
    this.getDataForDisplay()
  })
}




}
