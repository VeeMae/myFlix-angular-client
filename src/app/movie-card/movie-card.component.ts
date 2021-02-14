import { Component, OnInit } from '@angular/core';
import { GetAllMoviesService, AddMovieService, GetUserService } from '../fetch-api-data.service';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';
import { MovieDirectorComponent } from '../movie-director/movie-director.component';
import { MovieDescriptionComponent } from '../movie-description/movie-description.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {

  movies: any[] = [];

    /**
     * Gets called when creating an instance of the class
     * @param fetchApiData
     * @param fetchApiDataFaves
     * @param fetchApiDataUser
     * @param dialog
     * @param snackBar
     * @param router
     */
    constructor(
        public fetchApiData: GetAllMoviesService,
        public fetchApiDataFaves: AddMovieService,
        public fetchApiDataUser: GetUserService,
        public dialog: MatDialog,
        public snackBar: MatSnackBar,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getMovies();
    }

    /**
     * Function to get all movies from the database.
     */
    getMovies(): void {
        this.fetchApiData.getAllMovies().subscribe((resp: any) => {
            this.movies = resp;
            console.log(this.movies);
            return this.movies;
        });
    }

    /**
     * Function to add a movie to user's list of favorites by getting the movie's ID and posting it to user's profile.
     * @param id
     */
    addMovieToFaves(id: string): void {
        this.fetchApiDataFaves.addMovie(id).subscribe((resp: any) => {
            console.log(resp);
            this.snackBar.open('Added to favorites!', 'OK', {
            duration: 2000
            });
        });
    }

    /**
     *Function to open the genre dialog, which displays information about the genre of the selected movie.
     * @param name
     * @param description
     */
    openGenreDialog(name: string, description: string): void {
        this.dialog.open(MovieGenreComponent, {
            data: { name, description},
            width: '600px',
            height: 'auto'
        });
    }

   /**
    * Function to open the director dialog, which displays information about the director of the selected movie.
    * @param name
    * @param bio
    * @param birth
    */
    openDirectorDialog(name: string, bio: string, birth: string): void {
        this.dialog.open(MovieDirectorComponent, {
            data: { name, bio, birth},
            width: '600px',
            height: 'auto'
        })
    }

    /**
     * Function to open the description dialog, which displays the summary of the selected movie.
     * @param description
     */
    openDescriptionDialog(description: string): void {
        this.dialog.open(MovieDescriptionComponent, {
            data: { description},
            width: '600px',
            height: 'auto'
        })
    }

   /**
    * Function to go to the user's profile, which will display a snackBar upon execution - alerting the user that they are now in their profile page.
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
     * Function to refresh the page.
     * @returns the movies page when clicked.
     */
    refresh(): void {
        this.router.navigate(['/movies'])
            .then(() => {
                window.location.reload();
            });
    }

    /**
     * Function to logout of the application.
     * @returns the welcome page when clicked.
     */
     logoutUser(): void {
        localStorage.clear();
    }
}
