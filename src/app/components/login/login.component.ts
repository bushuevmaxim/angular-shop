import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router,
    private fb: NonNullableFormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog
  ) { }



  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  submit(): void {
    const { email, password } = this.form.value;

    if (!this.form.valid || !email || !password) {
      return;
    }

    this.authService
      .login(email, password)
      .pipe(
        this.toast.observe({
          success: 'Logged in successfully',
          loading: 'Logging in...',
          error: 'Error was happened.',
        })
      )
      .subscribe(() => {
        this.router.navigate(['']);
        this.dialogRef.close();
      });
  }
  signUp(): void {

    this.dialogRef.close();
    const dialogRef = this.dialog.open(RegistrationComponent, {
      maxWidth: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });

  }
}
