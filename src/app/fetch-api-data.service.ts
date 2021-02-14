import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// The API URL that will provide data for the client app
const apiUrl = 'https://myflix-movie-application.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {

    /**
     * Gets called when creating an instance of the class
     * @param http
     */
    constructor(private http: HttpClient) { }

    /**
     * API call to get registration endpoint
     * @param userDetails
     */
    public userRegistration(userDetails: any): Observable<any> {
        // console.log(userDetails);
        return this.http.post(apiUrl + 'users', userDetails).pipe(
            catchError(this.handleError)
        );
    }

    /**
     * Function to handle errors
     * @param error
     */
    private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Please fill out every field properly and try again!');
    }
}

@Injectable({
  providedIn: 'root'
})

export class UserLoginService {

    /**
     * Gets called when creating an instance of the class
     * @param http
     */
    constructor(private http: HttpClient) { }

    /**
     * API call to get login endpoint
     * @param userDetails
     */
    public userLogin(userDetails: any): Observable<any> {
        return this.http.post(apiUrl + 'login', userDetails).pipe(
            catchError(this.handleError)
        );
    }

    /**
     * Function to handle errors
     * @param error
     */
    private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Please make sure you are entering the correct credentials and try again!');
    }
}

@Injectable({
  providedIn: 'root'
})

export class GetAllMoviesService {

    /**
     * Gets called when creating an instance of the class
     * @param http
     */
    constructor(private http: HttpClient) { }

    /**
     * API call to get all movies endpoint
     */
    public getAllMovies(): Observable<any> {
        const token = localStorage.getItem('token');
        return this.http.get(apiUrl + 'movies', {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + token,
                }),
        }).pipe(
            map(this.extractResponseData),
            catchError(this.handleError)
        );
    }

    private extractResponseData(res: any): any {
        const body = res;
        return body || { };
    }

    private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
    }
}

@Injectable({
  providedIn: 'root'
})

export class GetMovieByTitleService {

    /**
     * Gets called when creating an instance of the class
     * @param http
     */
    constructor(private http: HttpClient) { }

    /**
     * API call to get movie by title
     */
    public getMovieByTitle(): Observable<any> {
        const token = localStorage.getItem('token');
        return this.http.get(apiUrl + 'movies/:Title' , {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + token,
                })
        }).pipe(
            map(this.extractResponseData),
            catchError(this.handleError)
        );
    }

    private extractResponseData(res: any): any {
        const body = res;
        return body || { };
    }

    private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
    }
}

@Injectable({
  providedIn: 'root'
})

export class GetDirectorService {

    /**
     * Gets called when creating an instance of the class
     * @param http
     */
    constructor(private http: HttpClient) { }

    /**
     * API call to get director by name
     */
    public getDirector(): Observable<any> {
        const token = localStorage.getItem('token');
        return this.http.get(apiUrl + 'movies/director/:Name' , {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + token,
                })
        }).pipe(
            map(this.extractResponseData),
            catchError(this.handleError)
        );
    }

    private extractResponseData(res: any): any {
        const body = res;
        return body || { };
    }

    private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
    }
}

@Injectable({
  providedIn: 'root'
})

export class GetGenreService {

    /**
     * Gets called when creating an instance of the class
     * @param http
     */
    constructor(private http: HttpClient) { }

    /**
     * API call to get genre by name
     */
    public getGenre(): Observable<any> {
        const token = localStorage.getItem('token');
        return this.http.get(apiUrl + 'movies/genre/:Name' , {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + token,
                })
        }).pipe(
            map(this.extractResponseData),
            catchError(this.handleError)
        );
    }

    private extractResponseData(res: any): any {
        const body = res;
        return body || { };
    }

    private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
    }
}

@Injectable({
  providedIn: 'root'
})

export class GetUserService {

    /**
     * Gets called when creating an instance of the class
     * @param http
     */
    constructor(private http: HttpClient) { }

    /**
     * API call to get user endpoint
     */
    public getUser(): Observable<any> {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        return this.http.get(apiUrl + `users/${username}` , {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + token,
                })
        }).pipe(
            map(this.extractResponseData),
            catchError(this.handleError)
        );
    }

    private extractResponseData(res: any): any {
        const body = res;
        return body || { };
    }

    private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
    }
}

@Injectable({
  providedIn: 'root'
})

export class GetFaveMoviesService {

    /**
     * Gets called when creating an instance of the class
     * @param http
     */
    constructor(private http: HttpClient) { }

    /**
     * API call to get user information, which contains the user's list of favorite movies
     */
    public getFaveMovies(): Observable<any> {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        return this.http.get(apiUrl + `users/${username}` , {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + token,
                })
        }).pipe(
            map(this.extractResponseData),
            catchError(this.handleError)
        );
    }

    private extractResponseData(res: any): any {
        const body = res;
        return body || { };
    }

    private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
    }
}

@Injectable({
  providedIn: 'root'
})

export class AddMovieService {

    /**
     * Gets called when creating an instance of the class
     * @param http
     */
    constructor(private http: HttpClient) { }

    /**
     * API call to add a movie to user's list of favorites by movie Id
     * @param id
     */
    public addMovie(id: string): Observable<any> {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        return this.http.put(apiUrl + `users/${username}/movies/${id}`, id, {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + token,
                })
        }).pipe(
            map(this.extractResponseData),
            catchError(this.handleError)
        );
    }

    private extractResponseData(res: any): any {
        const body = res;
        return body || { };
    }

    private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
    }
}

@Injectable({
  providedIn: 'root'
})

export class EditUserService {

    /**
     * Gets called when creating an instance of the class
     * @param http
     */
    constructor(private http: HttpClient) { }

    /**
     * API call to post new user information to user's profile
     * @param userDetails
     */
    public editUser(userDetails: any): Observable<any> {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        return this.http.put(apiUrl + `users/${username}` , userDetails, {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + token,
                })
        }).pipe(
            map(this.extractResponseData),
            catchError(this.handleError)
        );
    }

    private extractResponseData(res: any): any {
        const body = res;
        return body || { };
    }

    private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Please make sure to fill in the required items properly and try again!');
    }
}

@Injectable({
  providedIn: 'root'
})

export class DeleteUserService {

    /**
     * Gets called when creating an instance of the class
     * @param http
     */
    constructor(private http: HttpClient) { }

    /**
     * API call to delete user from the database
     */
    public deleteUser(): Observable<any> {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        return this.http.delete(apiUrl + `users/${username}` , {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + token,
                })
        }).pipe(
            map(this.extractResponseData),
            catchError(this.handleError)
        );
    }

    private extractResponseData(res: any): any {
        const body = res;
        return body || { };
    }

    private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
    }
}

@Injectable({
  providedIn: 'root'
})

export class DeleteMovieService {

    /**
     * Gets called when creating an instance of the class
     * @param http
     */
    constructor(private http: HttpClient) { }

    /**
     * API call to delete a movie from user's list of favorites
     * @param id
     */
    public deleteMovie(id: string): Observable<any> {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        return this.http.delete(apiUrl + `users/${username}/movies/delete/${id}` , {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + token,
                })
        }).pipe(
            map(this.extractResponseData),
            catchError(this.handleError)
        );
    }

    private extractResponseData(res: any): any {
        const body = res;
        return body || { };
    }

    private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
    }
}



