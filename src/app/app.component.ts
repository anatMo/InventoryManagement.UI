import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // templateUrl: './components/login/login.component.html',
  // styleUrl: './components/login/login.component.css'
})
export class AppComponent implements OnInit{

  title = 'InventoryManagement.UI';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
      
  }

  logOut() {
    this.auth.signOut();
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  isSignupPage(): boolean {
    return this.router.url === '/signup';
  }

}
