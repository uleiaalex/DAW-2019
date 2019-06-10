import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantDetailService } from 'src/app/shared/plant-detail.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  
  id:number;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private service: PlantDetailService) { 
    
  }

  ngOnInit() {
    this.service.refreshList();
    this.sub = this.route.params.subscribe(params => {
          this.id = params['id']; 
     });
  }
}
