import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../app/services/auth.service/auth.service';

@Injectable({
  providedIn: 'root'
})

// I see it is deprecated, it is still working (its the best tutorial I found, I will learn it better)
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  // if jwt not valid-> redirects to login page
  canActivate(): boolean{
    if(this.auth.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
