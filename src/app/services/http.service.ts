import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  apiurl = 'http://localhost:3000/data';

  GetallData() {
    return this.http.get(this.apiurl);
  }
  
  addData(data: any) {
    return this.http.post(this.apiurl,data);
  }

}
