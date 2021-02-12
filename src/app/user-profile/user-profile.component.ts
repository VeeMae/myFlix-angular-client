import { Component, OnInit, Input, Inject } from '@angular/core';
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

    faveMovies: any[] = [];
    movies: any[] = [];
    faveMovieIds: any[] = [];

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

    deleteFaveMovie(id: string): void {
        this.fetchApiDataDeleteMovie.deleteMovie(id).subscribe((resp: any) => {
            console.log(resp);
            this.snackBar.open('Movie has been deleted.', 'OK', {
                duration: 5000
            });

            // Refresh page after deletion
            this.router.navigate(['user'])
            .then(() => {
                window.location.reload();
            });
        });
    }

    editUserData(): void {
        this.fetchApiData.editUser(this.userData).subscribe((result) => {
            console.log(result);
            this.snackBar.open('Update successful!', 'OK', {
                duration: 5000
            });
             this.router.navigate(['user'])
            .then(() => {
                window.location.reload();
            });
        }, (result) => {
            console.log(result)
            this.snackBar.open(result, 'OK', {
            duration: 5000
            });
        });
    }

    openDeleteUserDialog(): void {
        this.dialog.open(DeleteUserComponent, {
            width: '280px'
        })
    }

    openGenreDialog(name: string, description: string): void {
        this.dialog.open(MovieGenreComponent, {
            data: { name, description},
            width: '600px',
            height: 'auto'
        });
    }

    openDirectorDialog(name: string, bio: string, birth: string): void {
        this.dialog.open(MovieDirectorComponent, {
            data: { name, bio, birth},
            width: '600px',
            height: 'auto'
        })
    }

    openDescriptionDialog(description: string): void {
        this.dialog.open(MovieDescriptionComponent, {
            data: { description},
            width: '600px',
            height: 'auto'
        })
    }

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

     logoutUser(): void {
        localStorage.clear();
    }




}
