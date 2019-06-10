import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/login';
import { AuthService } from 'src/app/auth.service';
import { refreshDescendantViews } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login = { userid: "admin", password: "admin123" };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/managerplant';
    this.authService.logout();
  }

  get f() { return this.loginForm.controls; }

  refresh(): void {
    window.location.reload();
  }
  login() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    else{
      if(this.f.userid.value == this.model.userid && this.f.password.value == this.model.password){
        console.log("Login successful");
        //this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.userid.value);
        //this.router.navigate([this.returnUrl]);
        document.location.href = '/managerplant';
      }
      else{
        this.message = "Please check your userid and password";
      }
    } 
  } 
}
