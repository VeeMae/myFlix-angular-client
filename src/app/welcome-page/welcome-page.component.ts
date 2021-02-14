import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})

export class WelcomePageComponent implements OnInit {

    /**
     * Gets called when creating an instance of the class
     * @param dialog
     */
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

    /**
     * Function that will open the registration dialog when the sign up button is clicked
     * @returns registration dialog with field inputs for user to fill out
     */
    openUserRegistrationDialog(): void {
        this.dialog.open(UserRegistrationFormComponent, {
            // Assign the dialog width
            width: '380px'
        });
    }

   /**
    * Function that will open the login dialog when the log in button is clicked
    * @returns login dialog with field inputs for user to fill out
    */
    openUserLoginDialog(): void {
        this.dialog.open(UserLoginFormComponent, {
            // Assign the dialog width
            width: '380px'
        });
    }
}
