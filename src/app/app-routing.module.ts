import { MoviesComponent } from "./movies/movies-list/movies.component";
import { UsersComponent } from "./users/users-list/users.component";
import { Route, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";


const APP_ROOTS: Route[] = [{ path: '', pathMatch: 'full', redirectTo: 'movies' },
{ path: 'movies', component: MoviesComponent },
{ path: 'users', component: UsersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROOTS)],
    exports: [RouterModule]
})
export class AppRoutingModule { }