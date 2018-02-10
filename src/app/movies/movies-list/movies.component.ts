import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { Movie } from "../../models/movie";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  result;
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.loadMovies();
  }
  loadMovies() {
    this.moviesService.getMovies().subscribe(result => {
      this.movies = result;
    });
  }
}
