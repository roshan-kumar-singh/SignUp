import { signupStart } from 'src/app/state/auth.actions';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  agreeToTerms = true;

   constructor(private store: Store<AppState>){}
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
    if (!this.registerForm.valid) {
      return;
    }
    const firstName = this.registerForm.value.firstname ?? '';
    const lastName = this.registerForm.value.lastname ?? '';
    const email = this.registerForm.value.email ?? '';
    const mobile = this.registerForm.value.mobile ?? '';
    const password = this.registerForm.value.password ?? '';

    this.store.dispatch(signupStart({ firstName, lastName, email, mobile, password }));
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
