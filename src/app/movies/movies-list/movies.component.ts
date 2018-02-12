import { Component, OnInit, Input } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { Movie } from "../../models/movie";
import { Router } from "@angular/router";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
  @Input() movies: Movie[] = [];
  loading: boolean = true;
  constructor(private moviesService: MoviesService,  private router: Router) {
    this.loading = true;
  }

  ngOnInit() {
    this.loadMovies();
    
  }
  loadMovies() {
    this.loading = true;
    this.moviesService.getMovies().subscribe(result => {
      this.movies = result;
      this.loading = false;
      // console.log(this.movies[5].Rating);
    });
  }

  editMovie(movie: Movie) {
      this.router.navigate(['/editMovie', movie.Id]);

  }
  deleteMovie(movie: Movie) {
    this.router.navigate(['/deleteMovie', movie.Id]);
  }
}
