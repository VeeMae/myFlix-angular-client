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

    constructor(
      public fetchApiData: DeleteUserService,
      public dialogRef: MatDialogRef<DeleteUserComponent>,
      public snackBar: MatSnackBar,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

    // Delete user function
    deleteUserData(): void {
        this.fetchApiData.deleteUser().subscribe((result) => {
            console.log(result);
            this.snackBar.open('User has been deleted!', 'OK', {
                duration: 8000
            });
        }, (result) => {
            console.log(result)
            this.snackBar.open(result, 'OK', {
                duration: 2000
            });

            // Refresh page after deletion
            this.router.navigate(['/'])
            .then(() => {
                window.location.reload();
            });
        });
    }

    // refresh after cancelling
    refresh(): void {
        this.router.navigate(['/user'])
            .then(() => {
                window.location.reload();
            });
    }

}
