import { Component, OnInit, Input } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
// Selector property defines the custom HTML element, into which this component will render
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})

export class UserRegistrationFormComponent implements OnInit {

  @Input() userData = { username: '', password: '', email: '', birthday: ''};

    /**
     * Gets called when creating an instance of the class
     * @param fetchApiData
     * @param dialogRef
     * @param snackBar
     */
    constructor(
      public fetchApiData: UserRegistrationService,
      public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
      public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

    /**
     * Function that sends user's inputs to the database
     */
    registerUser(): void {
        this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
        this.dialogRef.close(); // This will close the modal on success!
        console.log(result)
        this.snackBar.open('Successfully registered user! Please log in to continue.', 'OK', {
            duration: 8000
        });
        }, (result) => {
            console.log(result)
            this.snackBar.open(result, 'OK', {
            duration: 8000
            });
        });
    }
}
