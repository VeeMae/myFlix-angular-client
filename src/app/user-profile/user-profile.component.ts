import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GetUserService, EditUserService, GetFaveMoviesService, DeleteMovieService, GetAllMoviesService, DeleteUserService } from '../fetch-api-data.service';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';
import { MovieDirectorComponent } from '../movie-director/movie-director.component';
import { MovieDescriptionComponent } from '../movie-description/movie-description.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

    @Input() userData = { username: '', password: '', email: '', birthday: ''};

    /**
     * Declaring the arrays that will get filled later on
     */
    faveMovies: any[] = [];
    movies: any[] = [];
    faveMovieIds: any[] = [];

    /**
     * Gets called when creating an instance of the class
     * @param fetchApiData
     * @param fetchApiDataAll
     * @param fetchApiDataUser
     * @param fetchApiDataMovies
     * @param fetchApiDataDeleteMovie
     * @param fetchApiDataDeleteUser
     * @param dialog
     * @param snackBar
     * @param router
     */
    constructor(
      public fetchApiData: EditUserService,
      public fetchApiDataAll: GetAllMoviesService,
      public fetchApiDataUser: GetUserService,
      public fetchApiDataMovies: GetFaveMoviesService,
      public fetchApiDataDeleteMovie: DeleteMovieService,
      public fetchApiDataDeleteUser: DeleteUserService,
      public dialog: MatDialog,
      public snackBar: MatSnackBar,
      private router: Router
    ) { }

    ngOnInit(): void {
        this.getFaveMovies();
    }

    /**
     * Function to retrieve user's favorite movies.
     * The function first fetches all the movies from the database and adds them to an array called movies. Another function is called inside, which retrieves the list of movie Ids that the user has already added to their list of favorites and add it to an array called faveMovieIds.
     * A function is then called to filter all the movies by movie Ids that match the user's list of movie Ids.
     * A new array called faveMovies then stores the filtered movies to display only the user's list of favorites.
     */
    getFaveMovies(): void {
        this.fetchApiDataAll.getAllMovies().subscribe((resp: any) => {
            this.fetchApiDataMovies.getFaveMovies().subscribe((resp: any) => {
                this.faveMovieIds = resp.FavoriteMovies;
                console.log(this.faveMovieIds);

                 this.faveMovies = this.movies.filter((movie) => this.faveMovieIds.includes(movie._id))
                 console.log(this.faveMovies)
            })
            this.movies = resp;
            console.log(this.movies);
        });
    }

    /**
     * Function to delete a movie from user's list of favorites
     * @param id
     */
    deleteFaveMovie(id: string): void {
        this.fetchApiDataDeleteMovie.deleteMovie(id).subscribe((resp: any) => {
            console.log(resp);
            this.snackBar.open('Movie has been deleted.', 'OK', {
                duration: 5000
            });
            setTimeout(() => this.router.navigate(['user'])
                .then(() => {
                    window.location.reload();
                }),1500);
        });
    }

    /**
     * Function to edit user's profile information based on user's inputs
     * @returns an alert that either let's the user know the update was a success or an error occured and the user needs to correctly fill in every field
     */
    editUserData(): void {
        this.fetchApiData.editUser(this.userData).subscribe((result) => {
            console.log(result);
            this.snackBar.open('Update successful!', 'OK', {
                duration: 5000
            });
            setTimeout(() => this.router.navigate(['user'])
            .then(() => {
                window.location.reload();
            }),1500);
        }, (result) => {
            console.log(result)
            this.snackBar.open(result, 'OK', {
            duration: 5000
            });
        });
    }

    /**
     * Function that opens the 'delete user' dialog, asking if the user wants to go through with profile deletion or not
     * @returns a dialog
     */
    openDeleteUserDialog(): void {
        this.dialog.open(DeleteUserComponent, {
            width: '300px'
        })
    }

    /**
     * Function to open the genre dialog, displaying information about the genre of the selected movie
     * @param name
     * @param description
     */
    openGenreDialog(name: string, description: string): void {
        this.dialog.open(MovieGenreComponent, {
            data: { name, description},
            width: '500px',
            height: 'auto'
        });
    }

    /**
     * Function to open the director dialog, displaying information about the director of the selected movie
     * @param name
     * @param bio
     * @param birth
     */
    openDirectorDialog(name: string, bio: string, birth: string): void {
        this.dialog.open(MovieDirectorComponent, {
            data: { name, bio, birth},
            width: '500px',
            height: 'auto'
        })
    }

    /**
     * Function to open the description dialog, displaying the summary of the selected movie
     * @param description
     */
    openDescriptionDialog(description: string): void {
        this.dialog.open(MovieDescriptionComponent, {
            data: { description},
            width: '500px',
            height: 'auto'
        })
    }

    /**
     * Function to go to the user's profile
     */
    openProfile(): void {
        this.fetchApiDataUser.getUser().subscribe((result) => {
            localStorage.getItem('token')
            const username = localStorage.getItem('user');
            this.snackBar.open(`Welcome to your profile, ${username}!`, 'OK', {
            duration: 5000
            });
            this.router.navigate(['user']);
        }, (result) => {
            this.snackBar.open(result, 'OK', {
            duration: 5000
            });
        });
    }

    /**
     * Function to log out
     * @returns the welcome page
     */
     logoutUser(): void {
        localStorage.clear();
    }
}
