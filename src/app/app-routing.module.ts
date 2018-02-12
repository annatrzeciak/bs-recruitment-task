import { MoviesComponent } from "./movies/movies-list/movies.component";
import { UsersComponent } from "./users/users-list/users.component";
import { Route, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserAddComponent } from "./users/user-add/user-add.component";
import { MovieAddComponent } from "./movies/movie-add/movie-add.component";


const APP_ROOTS: Route[] = [{ path: '', pathMatch: 'full', redirectTo: 'movies' },
{ path: 'movies', component: MoviesComponent },
{path: 'addMovie', component: MovieAddComponent},
{ path: 'users', component: UsersComponent },
{ path: 'addUser', component: UserAddComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROOTS)],
    exports: [RouterModule]
})
export class AppRoutingModule { }