import { Component, Input, OnInit } from '@angular/core';
import { UserLoginService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})

export class UserLoginFormComponent implements OnInit {

  @Input() userData = { username: '', password: '' };

    constructor(
      public fetchApiData: UserLoginService,
      public dialogRef: MatDialogRef<UserLoginFormComponent>,
      public snackBar: MatSnackBar,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

    // This is the function responsible for sending the form inputs to the backend
    loginUser(): void {
        this.fetchApiData.userLogin(this.userData).subscribe((result) => {

    // Logic for a successful user login goes here
            this.dialogRef.close(); // This will close the modal on success!
            console.log(result)
            localStorage.setItem('user', result.user.username);
            localStorage.setItem('token', result.token);
            this.snackBar.open('Successful login!', 'OK', {
            duration: 2000
            });
            this.router.navigate(['movies']);

        }, (result) => {
            console.log(result)
            this.snackBar.open(result, 'OK', {
            duration: 2000
            });
        });
    }

}
