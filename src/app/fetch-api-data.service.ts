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

    constructor(private http: HttpClient) { }

    // API call for the user registration endpoint
    public userRegistration(userDetails: any): Observable<any> {
        console.log(userDetails);
        return this.http.post(apiUrl + 'users', userDetails).pipe(
            catchError(this.handleError)
        );
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

export class UserLoginService {

    constructor(private http: HttpClient) { }

    // API call for the user login endpoint
    public userLogin(userDetails: any): Observable<any> {
        console.log(userDetails);
        return this.http.post(apiUrl + 'login', userDetails).pipe(
            // map((user: any) => {
            //     if (user && user.token) {
            //         localStorage.setItem('currentUser', JSON.stringify(user));
            //     }
            //     return user;
            // }),
            catchError(this.handleError)
        );
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

export class GetAllMoviesService {

    constructor(private http: HttpClient) { }

    // API call to get all movies endpoint
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

    constructor(private http: HttpClient) { }

    // API call to get movie by title endpoint
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

    constructor(private http: HttpClient) { }

    // API call to get a director by name endpoint
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

    constructor(private http: HttpClient) { }

    // API call to get a genre by name endpoint
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

    constructor(private http: HttpClient) { }

    // API call to get user by username endpoint
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

    constructor(private http: HttpClient) { }

    // API endpoint leads to user profile, which displays all of user's fave movies
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

    constructor(private http: HttpClient) { }

    // API call to add a movie endpoint
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

    constructor(private http: HttpClient) { }

    // API call to edit user endpoint
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
    'Please make sure to fill in the required items properly!');
    }
}

@Injectable({
  providedIn: 'root'
})

export class DeleteUserService {

    constructor(private http: HttpClient) { }

    // API call to delete user endpoint
    public deleteUser(): Observable<any> {
        const token = localStorage.getItem('token');
        return this.http.delete(apiUrl + 'users/:username' , {
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

    constructor(private http: HttpClient) { }

    // API call to delete movie endpoint
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



