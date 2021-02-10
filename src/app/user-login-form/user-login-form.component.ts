import { Component, Input, OnInit } from '@angular/core';
import { UserLoginService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})

export class UserLoginFormComponent implements OnInit {

  @Input() userData = { username: '', password: '', email: '', birthday: ''};

    constructor(
      public fetchApiData: UserLoginService,
      public dialogRef: MatDialogRef<UserLoginFormComponent>,
      public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

    // This is the function responsible for sending the form inputs to the backend
    loginUser(): void {
        this.fetchApiData.userLogin(this.userData).subscribe((result) => {

    // Logic for a successful user login goes here! (To be implemented)
        this.dialogRef.close(); // This will close the modal on success!
        console.log(result)
        this.snackBar.open(result, 'OK', {
            duration: 2000
        });
        }, (result) => {
            console.log(result)
            this.snackBar.open(result, 'OK', {
            duration: 2000
            });
        });
    }

}