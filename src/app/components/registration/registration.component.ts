import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NonNullableFormBuilder, AbstractControl, ValidationErrors, ValidatorFn, EmailValidator } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private usersService: UsersService,
    private formBuilder: NonNullableFormBuilder,
    private toast: HotToastService,
    private dialogRef: MatDialogRef<RegistrationComponent>
  ) { }

  form: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required,],
    city: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],

  }, { validators: passwordsMatchValidator() });

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }
  get city() {
    return this.form.get('city');
  }

  submit() {
    const { firstName, lastName, email, city, password } = this.form.value;

    console.log(this.form.value)
    console.log(this.form.valid)
    if (!this.form.valid || !firstName || !lastName || !city || !password || !email) {
      console.log('not valid');
      return;
    }
    console.log('submit');

    this.authService
      .signUp(email, password)
      .pipe(
        this.toast.observe({
          success: 'Congrats! You are all signed up',
          loading: 'Signing up...',

          error: 'Error was happened.'
        }),
        switchMap(({ user: { uid } }) =>
          this.usersService.addUser({ uid, firstName, lastName, email, city, })
        ),

      )
      .subscribe(() => {
        console.log("authService sub");

        this.router.navigate(['']);
        this.dialogRef.close()
      });
  }

}
export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else if (password && password.length < 6) {
      return { passwordTooShort: true };
    } else {
      return null;
    }
  };
}



