import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  agreeToTerms = true;

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]), // Email validation
    mobile: new FormControl("", [Validators.required, Validators.pattern(/^\d{10}$/)]), // Phone validation (10 digits)
    password: new FormControl("", [Validators.required, Validators.minLength(6)]) // Password validation (minimum 6 characters)
  });

  registerSubmited() {
    console.log(this.registerForm.value);
  }

  get FirstName(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get("lastname") as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }

  get Mobile(): FormControl {
    return this.registerForm.get("mobile") as FormControl;
  }

  get Password(): FormControl {
    return this.registerForm.get("password") as FormControl;
  }
}
