import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'myFlix-Angular-client';

    constructor(public dialog: MatDialog) { }

    // Function that will open the dialog when the signup button is clicked
    openUserRegistrationDialog(): void {
        this.dialog.open(UserRegistrationFormComponent, {
            // Assign the dialog width
            width: '280px'
        });
    }

}