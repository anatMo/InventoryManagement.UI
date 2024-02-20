import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateform';
import { AuthService } from '../../services/auth.service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private auth: AuthService, 
    private router: Router
    ) {}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: ['',Validators.required],
        password: ['',Validators.required]
      })
  }

  onLogin(){
    if(this.loginForm.valid) {

      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(response) => {
          alert(response.message);
          console.log(response.message);
          this.loginForm.reset();
          this.auth.storeToken(response.token);
          this.router.navigate(['products']);
        },
        error:(err) => {
          alert(err?.error.message)
        }
      })
    }else{
      ValidateForm.validateAllFormFields(this.loginForm);
      alert("Your Form is invalid");
    }
  }
}
