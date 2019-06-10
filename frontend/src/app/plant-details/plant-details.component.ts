import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styles: []
})
export class PlantDetailsComponent implements OnInit {

  id: string;
  constructor(private router: Router,public authService: AuthService) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    //this.router.navigate(['/login']);
    document.location.href = '/login';
  }

}
