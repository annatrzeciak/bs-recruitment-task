import { Route, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MovieEditComponent } from "./movie-edit/movie-edit.component";
import { MovieResolve } from "./movie-resolve.service";
import { MovieDeleteComponent } from "./movie-delete/movie-delete.component";


const MOVIES_ROOTS: Route[] = [
    { path: 'editMovie/:id', component: MovieEditComponent, resolve: { movie: MovieResolve } },
    { path: 'deleteMovie/:id', component: MovieDeleteComponent, resolve: { movie: MovieResolve } }
];

@NgModule({
    imports: [RouterModule.forChild(MOVIES_ROOTS)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }