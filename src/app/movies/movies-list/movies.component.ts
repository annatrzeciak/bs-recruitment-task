import { Component, Input } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { Movie } from "../../models/movie";
import { Router } from "@angular/router";
import { Response } from "@angular/http";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent {
   message: string = "";
   movies: Movie[] = [];
   loading: boolean = true;
  constructor(private moviesService: MoviesService, private router: Router) {
    this.loading = true;
    this.loadMovies();
  }
  loadMovies(): void {
    this.loading = true;
    this.moviesService
      .getMovies()
      .then(result => {
        this.movies = result;
        this.loading = false;
      })
      .catch(error => this.showMessage(error));
  }
  showMessage(message: Response): void {
    this.message = message.status + " " + message.statusText;
  }

  editMovie(movie: Movie): void {
    this.router.navigate(["/editMovie", movie.Id]);
  }
  deleteMovie(movie: Movie): void {
    this.router.navigate(["/deleteMovie", movie.Id]);
  }
}
