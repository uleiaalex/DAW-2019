import { Component, OnInit } from '@angular/core';
import { PlantDetailService } from 'src/app/shared/plant-detail.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ToastrService } from 'ngx-toastr';
import { PlantDetail } from 'src/app/shared/plant-detail.model';
import { HttpClient, HttpClientModule, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FormBuilder, FormGroup } from  '@angular/forms';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styles: []
})

export class PlantDetailComponent implements OnInit {
  file: any;

  form: FormGroup;

  public progress: number;
  public message: string;

  constructor(private service:PlantDetailService,
              private toastr:ToastrService,
              private http:HttpClient) 
              {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData= {
      id:'',
      name:'',
      content:'',
      category:''
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.id == "")
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form:NgForm)
  {
    this.service.postPlantDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully','Plant Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form:NgForm)
  {
    this.service.putPlantDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully','Plant Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
}
