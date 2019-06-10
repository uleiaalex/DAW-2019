import { Component, OnInit } from '@angular/core';
import { PlantDetailService } from 'src/app/shared/plant-detail.service';
import { PlantDetail } from 'src/app/shared/plant-detail.model';
import { NgForm } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: PlantDetailService,
    private router:Router) { }

  listlengthVal: number;

  ngOnInit() {
    this.service.refreshList();
    this.listlengthVal = 1;
  }

  onSubmit(listlengthTemp:string)
  {
    this.listlengthVal = Number(listlengthTemp);
  }

}
