import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Movie } from "../../models/movie";
import { MoviesService } from "../../services/movies.service";
import { Response } from "@angular/http/src/static_response";

@Component({
  selector: "app-movie-delete",
  templateUrl: "./movie-delete.component.html",
  styleUrls: ["./movie-delete.component.scss"]
})
export class MovieDeleteComponent {
  private message: string = "";
  private movie: Movie;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {
    this.loadMovie();
  }
  loadMovie(): void {
    this.movie = this.route.snapshot.data["movie"];
  }
  deleteMovie(): void {
    this.movieService
      .deleteMovie(this.movie.Id)
      .then(result => this.router.navigate(["/movies"]))
      .catch(error => this.showMessage(error));
  }
  showMessage(message: Response): void {
    this.message = message.status + " " + message.statusText;
  }
}
