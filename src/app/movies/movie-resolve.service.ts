import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../services/movies.service';

@Injectable()
export class MovieResolve implements Resolve<Movie> {
    constructor(private moviesService: MoviesService) {
    }
    resolve(route: ActivatedRouteSnapshot) {
        return this.moviesService.getMovie(route.params['id']);
    }
}