import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../../helpers/validateform';
import { AuthService } from '../../../services/auth.service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  signUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router:Router) {}

  ngOnInit(): void {
      this.signUpForm = this.formBuilder.group({
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        phone:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required]
      })
  }

  onSignup() {
    if(this.signUpForm.valid){
      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(response) => {
          alert("Signed Up Successfuly");
          this.signUpForm.reset();
          this.router.navigate(['login']);
        },
        error:(err) => {
          alert(err.message)
        }
      })
    }else{
      ValidateForm.validateAllFormFields(this.signUpForm);
      alert("Your Form is invalid");
    }
  }
}
