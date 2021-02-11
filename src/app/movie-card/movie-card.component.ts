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

    // Get all movies
    getMovies(): void {
        this.fetchApiData.getAllMovies().subscribe((resp: any) => {
            this.movies = resp;
            console.log(this.movies);
            return this.movies;
        });
    }

    // Add movie to faves
    addMovieToFaves(id: string): void {
        this.fetchApiDataFaves.addMovie(id).subscribe((resp: any) => {
            console.log(resp);
            this.snackBar.open('Added to favorites!', 'OK', {
            duration: 2000
            });
        });
    }

    // Open genre info
    openGenreDialog(name: string, description: string): void {
        this.dialog.open(MovieGenreComponent, {
            data: { name, description},
            width: '600px',
            height: 'auto'
        });
    }

    // Open director info
    openDirectorDialog(name: string, bio: string, birth: string): void {
        this.dialog.open(MovieDirectorComponent, {
            data: { name, bio, birth},
            width: '600px',
            height: 'auto'
        })
    }

    // Open description
    openDescriptionDialog(description: string): void {
        this.dialog.open(MovieDescriptionComponent, {
            data: { description},
            width: '600px',
            height: 'auto'
        })
    }

    // Go to profile
    openProfile(): void {
        this.fetchApiDataUser.getUser().subscribe((result) => {
            localStorage.getItem('token')
            const username = localStorage.getItem('user');
            this.snackBar.open(`Welcome ${username}!`, 'OK', {
            duration: 8000
            });
            this.router.navigate(['user']);
        }, (result) => {
            this.snackBar.open(result, 'OK', {
            duration: 8000
            });
        });
    }

    // Logout function
     logoutUser(): void {
        localStorage.clear();
    }

}
