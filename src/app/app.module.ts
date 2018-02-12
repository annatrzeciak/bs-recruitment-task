import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core-module/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { MoviesComponent } from "./movies/movies-list/movies.component";
import { UsersComponent } from "./users/users-list/users.component";
import { HttpModule } from "@angular/http";
import { MoviesService } from "./services/movies.service";
import { UsersService } from "./services/users.service";
import { SpinnerComponent } from "./spinner/spinner.component";
import { RouterModule } from "@angular/router";
import { UserResolve } from "./users/user-resolve.service";
import { UserRoutingModule } from "./users/users-routing.module";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { UserDeleteComponent } from "./users/user-delete/user-delete.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserAddComponent } from "./users/user-add/user-add.component";
import { MovieRoutingModule } from "./movies/movie-routing.module";
import { MovieDeleteComponent } from "./movies/movie-delete/movie-delete.component";
import { MovieEditComponent } from "./movies/movie-edit/movie-edit.component";
import { MovieResolve } from "./movies/movie-resolve.service";
import { MovieAddComponent } from "./movies/movie-add/movie-add.component";
import { FilterMoviePipe } from "./pipes/filter-movies.pipe";
import { FilterUsersPipe } from "./pipes/filter-users.pipe";

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDeleteComponent,
    MovieEditComponent,
    MovieAddComponent,
    UsersComponent,
    UserAddComponent,
    UserEditComponent,
    UserDeleteComponent,
    SpinnerComponent,
    FilterMoviePipe,
    FilterUsersPipe
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule,
    RouterModule,
    UserRoutingModule,
    MovieRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [MoviesService, UsersService, UserResolve, MovieResolve],
  bootstrap: [AppComponent]
})
export class AppModule {}
