import { Component, OnInit } from '@angular/core';
import { PlantDetailService } from 'src/app/shared/plant-detail.service';
import { PlantDetail } from 'src/app/shared/plant-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plant-detail-list',
  templateUrl: './plant-detail-list.component.html',
  styles: []
})
export class PlantDetailListComponent implements OnInit {

  constructor(private service: PlantDetailService,
              private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd:PlantDetail)
  {
    this.service.formData = Object.assign({},pd);
    this.service.formData.id = pd.id;
    console.log(pd.id);
  }

  onDelete(id)
  {
    if(confirm('Are you sure to delete this plant?')){
      this.service.deletePlantDetail(id).subscribe(
        res => {
          this.service.refreshList();
          this.toastr.warning('Delete successfully','Plant Detail Register');
        },
        err => {
          console.log(err);
        }
      )
    }
  }
}
