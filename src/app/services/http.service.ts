import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  apiurl = 'https://localhost:7157/api/home';
  apiurl2 = 'http://localhost:3000/data';

  GetallData() {
    const data = {username: "beso", password: "beso2019"}
    return this.http.post(this.apiurl,data);
  }

  // GetallData(){
  //   return this.http.get(this.apiurl2)
  // }

  addData(data: any) {
    return this.http.post(this.apiurl,data);
  }

}
