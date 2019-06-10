import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FileSelectDirective } from 'ng2-file-upload';


import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { PlantDetailComponent } from './plant-details/plant-detail/plant-detail.component';
import { PlantDetailListComponent } from './plant-details/plant-detail-list/plant-detail-list.component';
import { PlantDetailService } from './shared/plant-detail.service';
import { PlantComponent } from './plant/plant.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PlantDetailsComponent,
    PlantDetailComponent,
    PlantDetailListComponent,
    PlantComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    FileSelectDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      [
        {path: "",component: HomeComponent},
        {path: "home",component: HomeComponent},
        {path: "login",component: LoginComponent},
        {path: "managerplant",component: PlantDetailsComponent,canActivate: [AuthGuard]},
        {path: "plant/:id",component: PlantComponent},
        {path: "**",component: NotFoundComponent}
      ]
    )
  ],
  providers: [PlantDetailService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
