import { Injectable } from '@angular/core';
import { PlantDetail } from './plant-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlantDetailService {

  formData: PlantDetail
  readonly rootURL='https://localhost:5001/api';
  list:PlantDetail[] = [];

  constructor( private http:HttpClient) { }
  //Insert data on list
  postPlantDetail(){
    console.log(this.formData.id);
    return this.http.post(this.rootURL+'/Plants',this.formData);
  }
  //Update data on list
  putPlantDetail(){
    console.log(this.formData.id)
    return this.http.put(this.rootURL+'/Plants/'+this.formData.id,this.formData);
  }
  //Remove data from list
  deletePlantDetail(id){
    return this.http.delete(this.rootURL+'/Plants/'+id);
  }
  //Get data from list
  refreshList()
  {
    this.http.get(this.rootURL+'/Plants')
    .toPromise()
    .then(res => this.list = res as PlantDetail[]);
  }
}
