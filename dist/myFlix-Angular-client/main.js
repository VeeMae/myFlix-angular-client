(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/de2":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _movie_genre_movie_genre_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../movie-genre/movie-genre.component */ "MpMj");
/* harmony import */ var _movie_director_movie_director_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-director/movie-director.component */ "74nF");
/* harmony import */ var _movie_description_movie_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie-description/movie-description.component */ "1ndm");
/* harmony import */ var _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../delete-user/delete-user.component */ "rXs7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_api_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetch-api-data.service */ "trEW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
















function UserProfileComponent_mat_card_32_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-header", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card-actions", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_mat_card_32_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const movie_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.openGenreDialog(movie_r1.Genre.Name, movie_r1.Genre.Description); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Genre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_mat_card_32_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const movie_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.openDirectorDialog(movie_r1.Director.Name, movie_r1.Director.Bio, movie_r1.Director.Birth); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Director ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_mat_card_32_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const movie_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.openDescriptionDialog(movie_r1.Description); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Synopsis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_mat_card_32_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const movie_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.deleteFaveMovie(movie_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](movie_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Directed by: ", movie_r1.Director.Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", movie_r1.ImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", movie_r1.Title);
} }
class UserProfileComponent {
    constructor(fetchApiData, fetchApiDataAll, fetchApiDataUser, fetchApiDataMovies, fetchApiDataDeleteMovie, fetchApiDataDeleteUser, dialog, snackBar, router) {
        this.fetchApiData = fetchApiData;
        this.fetchApiDataAll = fetchApiDataAll;
        this.fetchApiDataUser = fetchApiDataUser;
        this.fetchApiDataMovies = fetchApiDataMovies;
        this.fetchApiDataDeleteMovie = fetchApiDataDeleteMovie;
        this.fetchApiDataDeleteUser = fetchApiDataDeleteUser;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.userData = { username: '', password: '', email: '', birthday: '' };
        this.faveMovies = [];
        this.movies = [];
        this.faveMovieIds = [];
    }
    ngOnInit() {
        this.getFaveMovies();
    }
    getFaveMovies() {
        this.fetchApiDataAll.getAllMovies().subscribe((resp) => {
            this.fetchApiDataMovies.getFaveMovies().subscribe((resp) => {
                this.faveMovieIds = resp.FavoriteMovies;
                console.log(this.faveMovieIds);
                this.faveMovies = this.movies.filter((movie) => this.faveMovieIds.includes(movie._id));
                console.log(this.faveMovies);
            });
            this.movies = resp;
            console.log(this.movies);
        });
    }
    deleteFaveMovie(id) {
        this.fetchApiDataDeleteMovie.deleteMovie(id).subscribe((resp) => {
            console.log(resp);
            this.snackBar.open('Movie has been deleted', 'OK', {
                duration: 2000
            });
            // Refresh page after deletion
            this.router.navigate(['user'])
                .then(() => {
                window.location.reload();
            });
        });
    }
    editUserData() {
        this.fetchApiData.editUser(this.userData).subscribe((result) => {
            console.log(result);
            this.snackBar.open('Update successful!', 'OK', {
                duration: 2000
            });
            this.router.navigate(['user']);
        }, (result) => {
            console.log(result);
            this.snackBar.open(result, 'OK', {
                duration: 2000
            });
        });
    }
    openDeleteUserDialog() {
        this.dialog.open(_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_3__["DeleteUserComponent"], {
            width: '280px'
        });
    }
    openGenreDialog(name, description) {
        this.dialog.open(_movie_genre_movie_genre_component__WEBPACK_IMPORTED_MODULE_0__["MovieGenreComponent"], {
            data: { name, description },
            width: '600px',
            height: 'auto'
        });
    }
    openDirectorDialog(name, bio, birth) {
        this.dialog.open(_movie_director_movie_director_component__WEBPACK_IMPORTED_MODULE_1__["MovieDirectorComponent"], {
            data: { name, bio, birth },
            width: '600px',
            height: 'auto'
        });
    }
    openDescriptionDialog(description) {
        this.dialog.open(_movie_description_movie_description_component__WEBPACK_IMPORTED_MODULE_2__["MovieDescriptionComponent"], {
            data: { description },
            width: '600px',
            height: 'auto'
        });
    }
    openProfile() {
        this.fetchApiDataUser.getUser().subscribe((result) => {
            localStorage.getItem('token');
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
    logoutUser() {
        localStorage.clear();
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_5__["EditUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_5__["GetAllMoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_5__["GetUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_5__["GetFaveMoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_5__["DeleteMovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_5__["DeleteUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], inputs: { userData: "userData" }, decls: 33, vars: 5, consts: [[1, "toolbar"], ["routerLink", "/movies"], [1, "spacer"], [1, "profile-btn", 3, "click"], [1, "spacer2"], ["routerLink", "/", 1, "logout-btn", 3, "click"], [1, "delete-user-btn", 3, "click"], [1, "profile-page"], ["id", "update-container"], ["id", "update-header"], ["id", "update-card-content"], ["matInput", "", "placeholder", "Username", "type", "text", "name", "Username", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "placeholder", "Password", "name", "Password", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "email", "placeholder", "Email", "name", "Email", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Birthday", "name", "Birthday", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["id", "fave-movies-header"], [1, "movie-card-container"], ["id", "movie-card", 4, "ngFor", "ngForOf"], ["id", "movie-card"], [1, "card-header"], [3, "src", "alt"], [1, "card-actions"], ["mat-button", "", "color", "primary", 3, "click"], [1, "card-delete-btn", 3, "click"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "MyFlix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_4_listener() { return ctx.openProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_7_listener() { return ctx.logoutUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_9_listener() { return ctx.openDeleteUserDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Delete Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-card-header", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Update Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_19_listener($event) { return ctx.userData.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_21_listener($event) { return ctx.userData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_23_listener($event) { return ctx.userData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_25_listener($event) { return ctx.userData.birthday = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_27_listener() { return ctx.editUserData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Favorite Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, UserProfileComponent_mat_card_32_Template, 16, 4, "mat-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.userData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.userData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.userData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.userData.birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.faveMovies);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  background-color: #1f160a;\n  color: #fff;\n  font-family: \"Bree Serif\", serif;\n}\n\n.toolbar-header[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.spacer2[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.profile-btn[_ngcontent-%COMP%], .logout-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: transparent;\n  color: #fff;\n  font-family: \"Bree Serif\", serif;\n  cursor: pointer;\n}\n\n.delete-user-btn[_ngcontent-%COMP%] {\n  background-color: #9c3404;\n  border-color: transparent;\n  color: #fff;\n  border-radius: 5%;\n  font-size: 0.7rem;\n  margin-left: 20px;\n  cursor: pointer;\n  font-family: \"Bree Serif\", serif;\n  padding: 10px;\n}\n\n.profile-page[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.mat-card-header#update-header.mat-card-header[_ngcontent-%COMP%], .mat-card-content#update-card-content.mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  margin: 10px 0 30px 0;\n  font-family: \"Bree Serif\", serif;\n}\n\n.mat-card#update-container.mat-card.mat-focus-indicator[_ngcontent-%COMP%] {\n  margin: 40px auto;\n  max-width: 85%;\n}\n\nform.ng-untouched.ng-pristine.ng-invalid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  margin: 10px 0 30px 0;\n  font-family: \"Bree Serif\", serif;\n}\n\n.mat-card#movie-card.mat-card.mat-focus-indicator.ng-star-inserted[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n  padding: 0;\n  height: auto;\n  max-width: 90%;\n}\n\n.mat-card-subtitle.mat-card-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  padding: 10px;\n}\n\n.card-delete-btn[_ngcontent-%COMP%] {\n  margin: 10px auto;\n  cursor: pointer;\n  background-color: #9c3404;\n  border-color: transparent;\n  color: #fff;\n}\n\n.mat-card[_ngcontent-%COMP%]    > .mat-card-actions[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.movie-card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  width: 100vw;\n  margin: 20px auto;\n}\n\n.mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-flow: row wrap;\n  margin-left: 0;\n}\n\n.card-actions[_ngcontent-%COMP%]:last-child {\n  width: 100%;\n  display: block;\n}\n\n#fave-movies-header[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: #fff;\n  font-family: \"Bree Serif\", serif;\n  margin: 40px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBOztFQUVFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMTYwYTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkJyZWUgU2VyaWZcIiwgc2VyaWY7XG59XG5cbi50b29sYmFyLWhlYWRlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uc3BhY2VyMiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnByb2ZpbGUtYnRuLFxuLmxvZ291dC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkJyZWUgU2VyaWZcIiwgc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRlbGV0ZS11c2VyLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzM0MDQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkJyZWUgU2VyaWZcIiwgc2VyaWY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm9maWxlLXBhZ2Uge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm1hdC1jYXJkLWhlYWRlciN1cGRhdGUtaGVhZGVyLm1hdC1jYXJkLWhlYWRlcixcbi5tYXQtY2FyZC1jb250ZW50I3VwZGF0ZS1jYXJkLWNvbnRlbnQubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMCAzMHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkJyZWUgU2VyaWZcIiwgc2VyaWY7XG59XG5cbi5tYXQtY2FyZCN1cGRhdGUtY29udGFpbmVyLm1hdC1jYXJkLm1hdC1mb2N1cy1pbmRpY2F0b3Ige1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgbWF4LXdpZHRoOiA4NSU7XG59XG5cbmZvcm0ubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLWludmFsaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDAgMzBweCAwO1xuICBmb250LWZhbWlseTogXCJCcmVlIFNlcmlmXCIsIHNlcmlmO1xufVxuXG4ubWF0LWNhcmQjbW92aWUtY2FyZC5tYXQtY2FyZC5tYXQtZm9jdXMtaW5kaWNhdG9yLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBtYXJnaW46IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDkwJTtcbn1cblxuLm1hdC1jYXJkLXN1YnRpdGxlLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNhcmQtZGVsZXRlLWJ0biB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzM0MDQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LWNhcmQgPiAubWF0LWNhcmQtYWN0aW9uczpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm1vdmllLWNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uY2FyZC1hY3Rpb25zOmxhc3QtY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNmYXZlLW1vdmllcy1oZWFkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiQnJlZSBTZXJpZlwiLCBzZXJpZjtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG59XG5cbi8vIE1lZGlhIFF1ZXJpZXNcblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xufVxuIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/venusmae/Documents/CF/myFlix-Angular-client/src/main.ts */"zUnb");


/***/ }),

/***/ "0xBz":
/*!****************************************************!*\
  !*** ./src/app/movie-card/movie-card.component.ts ***!
  \****************************************************/
/*! exports provided: MovieCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function() { return MovieCardComponent; });
/* harmony import */ var _movie_genre_movie_genre_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../movie-genre/movie-genre.component */ "MpMj");
/* harmony import */ var _movie_director_movie_director_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-director/movie-director.component */ "74nF");
/* harmony import */ var _movie_description_movie_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie-description/movie-description.component */ "1ndm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_api_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch-api-data.service */ "trEW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function MovieCardComponent_mat_card_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-card-actions", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MovieCardComponent_mat_card_10_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const movie_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.openGenreDialog(movie_r1.Genre.Name, movie_r1.Genre.Description); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Genre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MovieCardComponent_mat_card_10_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const movie_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.openDirectorDialog(movie_r1.Director.Name, movie_r1.Director.Bio, movie_r1.Director.Birth); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Director ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MovieCardComponent_mat_card_10_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const movie_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.openDescriptionDialog(movie_r1.Description); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Synopsis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MovieCardComponent_mat_card_10_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const movie_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.addMovieToFaves(movie_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](movie_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Directed by: ", movie_r1.Director.Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", movie_r1.ImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", movie_r1.Title);
} }
class MovieCardComponent {
    constructor(fetchApiData, fetchApiDataFaves, fetchApiDataUser, dialog, snackBar, router) {
        this.fetchApiData = fetchApiData;
        this.fetchApiDataFaves = fetchApiDataFaves;
        this.fetchApiDataUser = fetchApiDataUser;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.movies = [];
    }
    ngOnInit() {
        this.getMovies();
    }
    // Get all movies
    getMovies() {
        this.fetchApiData.getAllMovies().subscribe((resp) => {
            this.movies = resp;
            console.log(this.movies);
            return this.movies;
        });
    }
    // Add movie to faves
    addMovieToFaves(id) {
        this.fetchApiDataFaves.addMovie(id).subscribe((resp) => {
            console.log(resp);
            this.snackBar.open('Added to favorites!', 'OK', {
                duration: 2000
            });
        });
    }
    // Open genre info
    openGenreDialog(name, description) {
        this.dialog.open(_movie_genre_movie_genre_component__WEBPACK_IMPORTED_MODULE_0__["MovieGenreComponent"], {
            data: { name, description },
            width: '600px',
            height: 'auto'
        });
    }
    // Open director info
    openDirectorDialog(name, bio, birth) {
        this.dialog.open(_movie_director_movie_director_component__WEBPACK_IMPORTED_MODULE_1__["MovieDirectorComponent"], {
            data: { name, bio, birth },
            width: '600px',
            height: 'auto'
        });
    }
    // Open description
    openDescriptionDialog(description) {
        this.dialog.open(_movie_description_movie_description_component__WEBPACK_IMPORTED_MODULE_2__["MovieDescriptionComponent"], {
            data: { description },
            width: '600px',
            height: 'auto'
        });
    }
    // Go to profile
    openProfile() {
        this.fetchApiDataUser.getUser().subscribe((result) => {
            localStorage.getItem('token');
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
    // refresh when clicking myFlix name in toolbar
    refresh() {
        this.router.navigate(['/movies'])
            .then(() => {
            window.location.reload();
        });
    }
    // Logout function
    logoutUser() {
        localStorage.clear();
    }
}
MovieCardComponent.ɵfac = function MovieCardComponent_Factory(t) { return new (t || MovieCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_4__["GetAllMoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_4__["AddMovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_4__["GetUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
MovieCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MovieCardComponent, selectors: [["app-movie-card"]], decls: 11, vars: 1, consts: [[1, "toolbar"], ["routerLink", "/movies", 1, "toolbar-header", 3, "click"], [1, "spacer"], [1, "profile-btn", 3, "click"], [1, "spacer2"], ["routerLink", "/", 1, "logout-btn", 3, "click"], [1, "movie-card-container"], ["class", "movie-card", 4, "ngFor", "ngForOf"], [1, "movie-card"], [1, "card-header"], [3, "src", "alt"], [1, "card-actions"], ["mat-button", "", "color", "primary", 3, "click"], ["matTooltip", "Add to favorites!", "aria-label", "Button that displays a tooltip when focused or hovered over. Let's you add a movie to list of favorites.", 1, "card-button", 3, "click"], [2, "margin-top", "8px"]], template: function MovieCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MovieCardComponent_Template_span_click_1_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "MyFlix");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MovieCardComponent_Template_button_click_4_listener() { return ctx.openProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MovieCardComponent_Template_button_click_7_listener() { return ctx.logoutUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MovieCardComponent_mat_card_10_Template, 17, 4, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"]], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.spacer2[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  background-color: #1f160a;\n  color: #fff;\n  font-family: \"Bree Serif\", serif;\n}\n\n.toolbar-header[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\ndiv.movie-card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  text-align: center;\n  margin: 20px auto;\n}\n\n.movie-card[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-flow: row wrap;\n  margin-left: 0;\n}\n\n.card-actions[_ngcontent-%COMP%]:last-child {\n  width: 100%;\n  display: block;\n}\n\n.icon-text[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin: 5px auto;\n}\n\n.card-button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.card-button[_ngcontent-%COMP%]:hover {\n  background-color: #dae7e3;\n}\n\n.profile-btn[_ngcontent-%COMP%], .logout-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: transparent;\n  color: #fff;\n  font-family: \"Bree Serif\", serif;\n  cursor: pointer;\n}\n\n@media (max-width: 375px) {\n  .mat-card-actions.mat-card-actions.card-actions[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vdmllLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBOztFQUVFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtFQURGO0FBQ0YiLCJmaWxlIjoibW92aWUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnNwYWNlcjIge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi50b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMTYwYTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkJyZWUgU2VyaWZcIiwgc2VyaWY7XG59XG5cbi50b29sYmFyLWhlYWRlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2Lm1vdmllLWNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5tb3ZpZS1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1hdC1jYXJkLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5jYXJkLWFjdGlvbnM6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmljb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4uY2FyZC1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNhcmQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTdlMztcbn1cblxuLnByb2ZpbGUtYnRuLFxuLmxvZ291dC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkJyZWUgU2VyaWZcIiwgc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLy8gTWVkaWEgUXVlcmllc1xuXG5AbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLm1hdC1jYXJkLWFjdGlvbnMubWF0LWNhcmQtYWN0aW9ucy5jYXJkLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "1ndm":
/*!******************************************************************!*\
  !*** ./src/app/movie-description/movie-description.component.ts ***!
  \******************************************************************/
/*! exports provided: MovieDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDescriptionComponent", function() { return MovieDescriptionComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class MovieDescriptionComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
MovieDescriptionComponent.ɵfac = function MovieDescriptionComponent_Factory(t) { return new (t || MovieDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
MovieDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MovieDescriptionComponent, selectors: [["app-movie-description"]], decls: 6, vars: 1, consts: [[1, "card-header"]], template: function MovieDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Movie Synopsis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.description);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]], styles: [".mat-card-content.mat-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 90%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vdmllLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6Im1vdmllLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLWNvbnRlbnQubWF0LWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */"] });


/***/ }),

/***/ "74nF":
/*!************************************************************!*\
  !*** ./src/app/movie-director/movie-director.component.ts ***!
  \************************************************************/
/*! exports provided: MovieDirectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDirectorComponent", function() { return MovieDirectorComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class MovieDirectorComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
MovieDirectorComponent.ɵfac = function MovieDirectorComponent_Factory(t) { return new (t || MovieDirectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
MovieDirectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MovieDirectorComponent, selectors: [["app-movie-director"]], decls: 11, vars: 6, consts: [[1, "card-header"], [1, "birthday"]], template: function MovieDirectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Birthday:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 3, ctx.data.birth, "longDate"), "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-card-content.mat-card-content.birthday[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.mat-card-content.mat-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 90%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vdmllLWRpcmVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJtb3ZpZS1kaXJlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQubWF0LWNhcmQtY29udGVudC5iaXJ0aGRheSB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQubWF0LWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LVDx":
/*!****************************************************************************!*\
  !*** ./src/app/user-registration-form/user-registration-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserRegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationFormComponent", function() { return UserRegistrationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch-api-data.service */ "trEW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class UserRegistrationFormComponent {
    constructor(fetchApiData, dialogRef, snackBar) {
        this.fetchApiData = fetchApiData;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.userData = { username: '', password: '', email: '', birthday: '' };
    }
    ngOnInit() {
    }
    // This is the function responsible for sending the form inputs to the backend
    registerUser() {
        this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
            // Logic for a successful user registration goes here! (To be implemented)
            this.dialogRef.close(); // This will close the modal on success!
            console.log(result);
            this.snackBar.open('Successfully registered user! Please log in to continue.', 'OK', {
                duration: 8000
            });
        }, (result) => {
            console.log(result);
            this.snackBar.open(result, 'OK', {
                duration: 8000
            });
        });
    }
}
UserRegistrationFormComponent.ɵfac = function UserRegistrationFormComponent_Factory(t) { return new (t || UserRegistrationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_1__["UserRegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
UserRegistrationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRegistrationFormComponent, selectors: [["app-user-registration-form"]], inputs: { userData: "userData" }, decls: 17, vars: 4, consts: [["matInput", "", "placeholder", "Username", "type", "text", "name", "Username", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "placeholder", "Password", "name", "Password", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "email", "placeholder", "Email", "name", "Email", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Birthday", "name", "Birthday", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function UserRegistrationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.userData.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationFormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.userData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationFormComponent_Template_input_ngModelChange_11_listener($event) { return ctx.userData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationFormComponent_Template_input_ngModelChange_13_listener($event) { return ctx.userData.birthday = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRegistrationFormComponent_Template_button_click_15_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.birthday);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXJlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "MpMj":
/*!******************************************************!*\
  !*** ./src/app/movie-genre/movie-genre.component.ts ***!
  \******************************************************/
/*! exports provided: MovieGenreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieGenreComponent", function() { return MovieGenreComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class MovieGenreComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
MovieGenreComponent.ɵfac = function MovieGenreComponent_Factory(t) { return new (t || MovieGenreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
MovieGenreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MovieGenreComponent, selectors: [["app-movie-genre"]], decls: 6, vars: 2, consts: [["id", "genre-card-text"]], template: function MovieGenreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.description);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]], styles: [".mat-card-content.mat-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 90%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vdmllLWdlbnJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6Im1vdmllLWdlbnJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLWNvbnRlbnQubWF0LWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'myFlix-Angular-client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _user_registration_form_user_registration_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-registration-form/user-registration-form.component */ "LVDx");
/* harmony import */ var _user_login_form_user_login_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-login-form/user-login-form.component */ "r0Ri");
/* harmony import */ var _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./movie-card/movie-card.component */ "0xBz");
/* harmony import */ var _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./welcome-page/welcome-page.component */ "fDIK");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "/de2");
/* harmony import */ var _movie_genre_movie_genre_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./movie-genre/movie-genre.component */ "MpMj");
/* harmony import */ var _movie_director_movie_director_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./movie-director/movie-director.component */ "74nF");
/* harmony import */ var _movie_description_movie_description_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./movie-description/movie-description.component */ "1ndm");
/* harmony import */ var _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./delete-user/delete-user.component */ "rXs7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");



























const appRoutes = [
    { path: 'welcome', component: _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_19__["WelcomePageComponent"] },
    { path: 'movies', component: _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_18__["MovieCardComponent"] },
    { path: 'user', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_20__["UserProfileComponent"] },
    { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _user_registration_form_user_registration_form_component__WEBPACK_IMPORTED_MODULE_16__["UserRegistrationFormComponent"],
        _user_login_form_user_login_form_component__WEBPACK_IMPORTED_MODULE_17__["UserLoginFormComponent"],
        _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_18__["MovieCardComponent"],
        _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_19__["WelcomePageComponent"],
        _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_20__["UserProfileComponent"],
        _movie_genre_movie_genre_component__WEBPACK_IMPORTED_MODULE_21__["MovieGenreComponent"],
        _movie_director_movie_director_component__WEBPACK_IMPORTED_MODULE_22__["MovieDirectorComponent"],
        _movie_description_movie_description_component__WEBPACK_IMPORTED_MODULE_23__["MovieDescriptionComponent"],
        _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_24__["DeleteUserComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"]] }); })();


/***/ }),

/***/ "fDIK":
/*!********************************************************!*\
  !*** ./src/app/welcome-page/welcome-page.component.ts ***!
  \********************************************************/
/*! exports provided: WelcomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function() { return WelcomePageComponent; });
/* harmony import */ var _user_login_form_user_login_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-login-form/user-login-form.component */ "r0Ri");
/* harmony import */ var _user_registration_form_user_registration_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-registration-form/user-registration-form.component */ "LVDx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class WelcomePageComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    // Function that will open the dialog when the signup button is clicked
    openUserRegistrationDialog() {
        this.dialog.open(_user_registration_form_user_registration_form_component__WEBPACK_IMPORTED_MODULE_1__["UserRegistrationFormComponent"], {
            // Assign the dialog width
            width: '280px'
        });
    }
    openUserLoginDialog() {
        this.dialog.open(_user_login_form_user_login_form_component__WEBPACK_IMPORTED_MODULE_0__["UserLoginFormComponent"], {
            width: '280px'
        });
    }
}
WelcomePageComponent.ɵfac = function WelcomePageComponent_Factory(t) { return new (t || WelcomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
WelcomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WelcomePageComponent, selectors: [["app-welcome-page"]], decls: 7, vars: 0, consts: [[1, "main-page"], [1, "main-page-header"], ["mat-raised-button", "", 1, "sign-up-btn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function WelcomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Welcome to myFlix!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WelcomePageComponent_Template_button_click_3_listener() { return ctx.openUserRegistrationDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WelcomePageComponent_Template_button_click_5_listener() { return ctx.openUserLoginDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap\");\n.main-page[_ngcontent-%COMP%] {\n  height: 100%;\n  text-align: center;\n}\n.main-page-header[_ngcontent-%COMP%] {\n  margin: 200px auto;\n  margin-bottom: 50px;\n  font-family: \"Bree Serif\", serif;\n  text-transform: uppercase;\n  font-size: 2rem;\n  color: #fff;\n}\n.sign-up-btn[_ngcontent-%COMP%] {\n  background-color: #3d7b48;\n  color: #fff;\n  margin-right: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwrRUFBQTtBQUVSO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBRjtBQUdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJ3ZWxjb21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnJlZStTZXJpZiZkaXNwbGF5PXN3YXBcIik7XG5cbi5tYWluLXBhZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW4tcGFnZS1oZWFkZXIge1xuICBtYXJnaW46IDIwMHB4IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkJyZWUgU2VyaWZcIiwgc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zaWduLXVwLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDdiNDg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "r0Ri":
/*!**************************************************************!*\
  !*** ./src/app/user-login-form/user-login-form.component.ts ***!
  \**************************************************************/
/*! exports provided: UserLoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginFormComponent", function() { return UserLoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch-api-data.service */ "trEW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class UserLoginFormComponent {
    constructor(fetchApiData, dialogRef, snackBar, router) {
        this.fetchApiData = fetchApiData;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.router = router;
        this.userData = { username: '', password: '' };
    }
    ngOnInit() {
    }
    // This is the function responsible for sending the form inputs to the backend
    loginUser() {
        this.fetchApiData.userLogin(this.userData).subscribe((result) => {
            // Logic for a successful user login goes here
            this.dialogRef.close(); // This will close the modal on success!
            console.log(result);
            localStorage.setItem('user', result.user.username);
            localStorage.setItem('token', result.token);
            this.snackBar.open('Successful login!', 'OK', {
                duration: 2000
            });
            this.router.navigate(['movies']);
        }, (result) => {
            console.log(result);
            this.snackBar.open(result, 'OK', {
                duration: 2000
            });
        });
    }
}
UserLoginFormComponent.ɵfac = function UserLoginFormComponent_Factory(t) { return new (t || UserLoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserLoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLoginFormComponent, selectors: [["app-user-login-form"]], inputs: { userData: "userData" }, decls: 13, vars: 2, consts: [["matInput", "", "placeholder", "Username", "type", "text", "name", "Username", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "placeholder", "Password", "name", "Password", "required", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function UserLoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log In!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserLoginFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.userData.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserLoginFormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.userData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLoginFormComponent_Template_button_click_11_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Log In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.password);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "rXs7":
/*!******************************************************!*\
  !*** ./src/app/delete-user/delete-user.component.ts ***!
  \******************************************************/
/*! exports provided: DeleteUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserComponent", function() { return DeleteUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch-api-data.service */ "trEW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");






class DeleteUserComponent {
    constructor(fetchApiData, dialogRef, snackBar, router) {
        this.fetchApiData = fetchApiData;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.router = router;
    }
    ngOnInit() {
    }
    // Delete user function
    deleteUserData() {
        this.fetchApiData.deleteUser().subscribe((result) => {
            console.log(result);
            this.snackBar.open('User has been deleted!', 'OK', {
                duration: 8000
            });
        }, (result) => {
            console.log(result);
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
    refresh() {
        this.router.navigate(['/user'])
            .then(() => {
            window.location.reload();
        });
    }
}
DeleteUserComponent.ɵfac = function DeleteUserComponent_Factory(t) { return new (t || DeleteUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_1__["DeleteUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DeleteUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteUserComponent, selectors: [["app-delete-user"]], decls: 9, vars: 0, consts: [["id", "delete-user-card"], [1, "card-header"], ["id", "delete-user-card_content"], [1, "cancel-btn", 3, "click"], [1, "delete-user-btn", 3, "click"]], template: function DeleteUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Are you 100% sure you want to delete your profile? There's no going back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteUserComponent_Template_button_click_5_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteUserComponent_Template_button_click_7_listener() { return ctx.deleteUserData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Delete Profile! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"]], styles: ["#delete-user-card[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  padding: 0;\n  width: 100%;\n}\n\n.mat-card-title.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.3rem;\n  color: #59201d;\n}\n\n.mat-card#delete-user-card.mat-card.mat-focus-indicator[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  background-color: #535e79;\n  border-color: transparent;\n  color: #fff;\n  border-radius: 5%;\n  font-size: 0.7rem;\n  cursor: pointer;\n}\n\n.delete-user-btn[_ngcontent-%COMP%] {\n  background-color: #9c3404;\n  border-color: transparent;\n  color: #fff;\n  border-radius: 5%;\n  font-size: 0.7rem;\n  cursor: pointer;\n}\n\n.mat-card-content#delete-user-card_content.mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  align-items: center;\n  padding: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RlbGV0ZS11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJkZWxldGUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZWxldGUtdXNlci1jYXJkIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtY2FyZC10aXRsZS5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMS4zcmVtO1xuICBjb2xvcjogIzU5MjAxZDtcbn1cblxuLm1hdC1jYXJkI2RlbGV0ZS11c2VyLWNhcmQubWF0LWNhcmQubWF0LWZvY3VzLWluZGljYXRvciB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FuY2VsLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzVlNzk7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRlbGV0ZS11c2VyLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzM0MDQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQjZGVsZXRlLXVzZXItY2FyZF9jb250ZW50Lm1hdC1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ "trEW":
/*!*******************************************!*\
  !*** ./src/app/fetch-api-data.service.ts ***!
  \*******************************************/
/*! exports provided: UserRegistrationService, UserLoginService, GetAllMoviesService, GetMovieByTitleService, GetDirectorService, GetGenreService, GetUserService, GetFaveMoviesService, AddMovieService, EditUserService, DeleteUserService, DeleteMovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function() { return UserRegistrationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginService", function() { return UserLoginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllMoviesService", function() { return GetAllMoviesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMovieByTitleService", function() { return GetMovieByTitleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDirectorService", function() { return GetDirectorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGenreService", function() { return GetGenreService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserService", function() { return GetUserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFaveMoviesService", function() { return GetFaveMoviesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieService", function() { return AddMovieService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserService", function() { return EditUserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserService", function() { return DeleteUserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMovieService", function() { return DeleteMovieService; });
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/operators */ "yrbL");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






// The API URL that will provide data for the client app
const apiUrl = 'https://myflix-movie-application.herokuapp.com/';
class UserRegistrationService {
    constructor(http) {
        this.http = http;
    }
    // API call for the user registration endpoint
    userRegistration(userDetails) {
        console.log(userDetails);
        return this.http.post(apiUrl + 'users', userDetails).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
UserRegistrationService.ɵfac = function UserRegistrationService_Factory(t) { return new (t || UserRegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserRegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserRegistrationService, factory: UserRegistrationService.ɵfac, providedIn: 'root' });
class UserLoginService {
    constructor(http) {
        this.http = http;
    }
    // API call for the user login endpoint
    userLogin(userDetails) {
        console.log(userDetails);
        return this.http.post(apiUrl + 'login', userDetails).pipe(
        // map((user: any) => {
        //     if (user && user.token) {
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //     }
        //     return user;
        // }),
        Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
UserLoginService.ɵfac = function UserLoginService_Factory(t) { return new (t || UserLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserLoginService, factory: UserLoginService.ɵfac, providedIn: 'root' });
class GetAllMoviesService {
    constructor(http) {
        this.http = http;
    }
    // API call to get all movies endpoint
    getAllMovies() {
        const token = localStorage.getItem('token');
        return this.http.get(apiUrl + 'movies', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            }),
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
GetAllMoviesService.ɵfac = function GetAllMoviesService_Factory(t) { return new (t || GetAllMoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetAllMoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GetAllMoviesService, factory: GetAllMoviesService.ɵfac, providedIn: 'root' });
class GetMovieByTitleService {
    constructor(http) {
        this.http = http;
    }
    // API call to get movie by title endpoint
    getMovieByTitle() {
        const token = localStorage.getItem('token');
        return this.http.get(apiUrl + 'movies/:Title', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
GetMovieByTitleService.ɵfac = function GetMovieByTitleService_Factory(t) { return new (t || GetMovieByTitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetMovieByTitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GetMovieByTitleService, factory: GetMovieByTitleService.ɵfac, providedIn: 'root' });
class GetDirectorService {
    constructor(http) {
        this.http = http;
    }
    // API call to get a director by name endpoint
    getDirector() {
        const token = localStorage.getItem('token');
        return this.http.get(apiUrl + 'movies/director/:Name', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
GetDirectorService.ɵfac = function GetDirectorService_Factory(t) { return new (t || GetDirectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetDirectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GetDirectorService, factory: GetDirectorService.ɵfac, providedIn: 'root' });
class GetGenreService {
    constructor(http) {
        this.http = http;
    }
    // API call to get a genre by name endpoint
    getGenre() {
        const token = localStorage.getItem('token');
        return this.http.get(apiUrl + 'movies/genre/:Name', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
GetGenreService.ɵfac = function GetGenreService_Factory(t) { return new (t || GetGenreService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetGenreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GetGenreService, factory: GetGenreService.ɵfac, providedIn: 'root' });
class GetUserService {
    constructor(http) {
        this.http = http;
    }
    // API call to get user by username endpoint
    getUser() {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        return this.http.get(apiUrl + `users/${username}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
GetUserService.ɵfac = function GetUserService_Factory(t) { return new (t || GetUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GetUserService, factory: GetUserService.ɵfac, providedIn: 'root' });
class GetFaveMoviesService {
    constructor(http) {
        this.http = http;
    }
    // API endpoint leads to user profile, which displays all of user's fave movies
    getFaveMovies() {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        return this.http.get(apiUrl + `users/${username}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
GetFaveMoviesService.ɵfac = function GetFaveMoviesService_Factory(t) { return new (t || GetFaveMoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetFaveMoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GetFaveMoviesService, factory: GetFaveMoviesService.ɵfac, providedIn: 'root' });
class AddMovieService {
    constructor(http) {
        this.http = http;
    }
    // API call to add a movie endpoint
    addMovie(id) {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        return this.http.put(apiUrl + `users/${username}/movies/${id}`, id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
AddMovieService.ɵfac = function AddMovieService_Factory(t) { return new (t || AddMovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AddMovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AddMovieService, factory: AddMovieService.ɵfac, providedIn: 'root' });
class EditUserService {
    constructor(http) {
        this.http = http;
    }
    // API call to edit user endpoint
    editUser(userDetails) {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        return this.http.put(apiUrl + `users/${username}`, userDetails, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Please make sure to fill in the required items properly!');
    }
}
EditUserService.ɵfac = function EditUserService_Factory(t) { return new (t || EditUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EditUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: EditUserService, factory: EditUserService.ɵfac, providedIn: 'root' });
class DeleteUserService {
    constructor(http) {
        this.http = http;
    }
    // API call to delete user endpoint
    deleteUser() {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        return this.http.delete(apiUrl + `users/${username}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
DeleteUserService.ɵfac = function DeleteUserService_Factory(t) { return new (t || DeleteUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DeleteUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DeleteUserService, factory: DeleteUserService.ɵfac, providedIn: 'root' });
class DeleteMovieService {
    constructor(http) {
        this.http = http;
    }
    // API call to delete movie endpoint
    deleteMovie(id) {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');
        return this.http.delete(apiUrl + `users/${username}/movies/delete/${id}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
DeleteMovieService.ɵfac = function DeleteMovieService_Factory(t) { return new (t || DeleteMovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DeleteMovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DeleteMovieService, factory: DeleteMovieService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map