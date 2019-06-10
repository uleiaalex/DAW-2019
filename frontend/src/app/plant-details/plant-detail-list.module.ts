import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantRoutingModule } from '../plant-routing.module';
import { PlantComponent } from '../plant/plant.component';
import { PlantDetailsComponent } from '../plant-details/plant-details.component';
import { PlantDetailListComponent } from './plant-detail-list/plant-detail-list.component';

@NgModule({
    declarations: [PlantComponent, PlantDetailsComponent, PlantDetailListComponent],
    imports: [
      CommonModule,
      PlantRoutingModule
    ]
})

export class PlantModule{ }