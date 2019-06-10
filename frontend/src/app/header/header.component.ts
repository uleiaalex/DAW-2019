import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AuthGuard } from '../auth.guard';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authGuard:AuthGuard) { }

  ngOnInit() {
  }

}
