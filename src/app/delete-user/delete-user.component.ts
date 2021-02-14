import { Component, OnInit } from '@angular/core';
import { DeleteUserService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})

export class DeleteUserComponent implements OnInit {

    /**
     * Gets called when creating an instance of the class
     * @param fetchApiData
     * @param dialogRef
     * @param snackBar
     * @param router
     */
    constructor(
      public fetchApiData: DeleteUserService,
      public dialogRef: MatDialogRef<DeleteUserComponent>,
      public snackBar: MatSnackBar,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

    /**
     * Function to delete user from the database.
     */
    deleteUserData(): void {
        this.fetchApiData.deleteUser().subscribe((resp: any) => {
            console.log(resp);
            this.snackBar.open('User has been deleted!', 'OK', {
                duration: 2000
            });
        }, (result) => {
            console.log(result)
            this.snackBar.open(result, 'OK', {
                duration: 2000
            });

            // Refresh page after deletion
            this.router.navigate(['/welcome'])
            .then(() => {
                window.location.reload();
            });
        });
    }

    // Function to refresh the page after a user clicks cancel when prompted to continue with the deletion of their profile.
    refresh(): void {
        this.router.navigate(['/user'])
            .then(() => {
                window.location.reload();
            });
    }

}
