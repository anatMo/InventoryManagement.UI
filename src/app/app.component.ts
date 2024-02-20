import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'InventoryManagement.UI';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
      
  }

  logOut() {
    this.auth.signOut();
  }

}
