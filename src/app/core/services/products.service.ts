import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";

interface DataSheet{
  result:any;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  getProductList() {
    return this.http.get(environment.API_URL+"/products");
  }

  getProductDetails(id:number){
    return this.http.get(environment.API_URL+"/products/"+id);
  }

  getDataSheetList(){
    return this.http.get("assets/json/datasheet.json");
  }
}
