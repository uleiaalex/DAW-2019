import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthGuard implements CanActivate {

    loginStatus= false;

    constructor(private router : Router){
      this.loginStatus=this.isLoggedIn();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;  
        return this.verifyLogin(url);
    }

    verifyLogin(url) : boolean{
        if(!this.isLoggedIn()){
            this.router.navigate(['/login']);
            return false;
        }
        else if(this.isLoggedIn()){
            return true;
        }
    }
    public isLoggedIn(): boolean{
        let status = false;
        if( localStorage.getItem('isLoggedIn') == "true"){
          status = true;
        }
        else{
          status = false;
        }
        return status;
    }
}
