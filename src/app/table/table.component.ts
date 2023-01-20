import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit{

  response:any = []
  allData:any[] = []
  @ViewChild(MatSort) matSort!:MatSort
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  finaldata:any;
  prgorammers:any[] = []
  tech:any[] = []
  categories:any[] = []

  constructor(private http:HttpService,private router:Router,private builder: FormBuilder){};

  ngOnInit(): void {
   this.getDataForDisplay()
  }

  closeExp(){
    const card = document.querySelector(".container")
    card?.classList.remove("expand")
    card?.classList.add('smt')
  }

  displayedColumns?: string[] = [ "carNumber", "cardId", "distance","date"]
  dataSource!:MatTableDataSource<any>;

  getDataForDisplay(){
    this.http.GetallData().subscribe((res:any) =>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
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
