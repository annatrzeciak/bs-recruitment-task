import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Movie } from "../../models/movie";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: "app-movie-delete",
  templateUrl: "./movie-delete.component.html",
  styleUrls: ["./movie-delete.component.scss"]
})
export class MovieDeleteComponent implements OnInit {
  movie: Movie;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    this.loadMovie();
  }
  loadMovie() {
    this.movie = this.route.snapshot.data["movie"];
  }
  deleteMovie() {
    this.movieService.deleteMovie(this.movie.Id).subscribe(() => {
      this.router.navigate(["/movies"]);
    });
  }
}
