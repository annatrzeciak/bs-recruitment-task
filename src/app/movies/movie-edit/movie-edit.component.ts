import { Movie } from "../../models/movie";
import { Component, Inject } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { MoviesService } from "../../services/movies.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Response } from "@angular/http/src/static_response";

@Component({
  selector: "app-movie-edit",
  templateUrl: "./movie-edit.component.html",
  styleUrls: ["./movie-edit.component.scss"]
})
export class MovieEditComponent {
  private message = "";
  private movie: Movie;
  private movieEditForm: FormGroup;
  private formHasErrors: boolean = false;
  constructor(
    private movieService: MoviesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    @Inject(FormBuilder) fb: FormBuilder
  ) {
    this.movie = new Movie();
    this.loadMovie();
    this.movieEditForm = fb.group({
      title: [
        this.movie.Title,
        [Validators.required, Validators.minLength(3), Validators.maxLength(16)]
      ],
      year: this.movie.Year,
      director: this.movie.Director,
      rating: this.movie.Rating
    });
  }
  loadMovie(): void {
    this.movie = this.route.snapshot.data["movie"];
  }
  setMovieValue(): void {
    this.movie.Title = this.movieEditForm.value.title;
    this.movie.Year = this.movieEditForm.value.year;
    this.movie.Director = this.movieEditForm.value.director;
    this.movie.Rating = this.movieEditForm.value.rating;
  }
  updateMovie(): void {
    if (this.movieEditForm.invalid) {
      this.formHasErrors = true;
    } else {
      this.setMovieValue();

      this.formHasErrors = false;
      this.movieService
        .updateMovie(this.movie.Id, this.movie)
        .then(result => this.router.navigate(["/movies"]))
        .catch(error => this.showMessage(error));
    }
  }
  showMessage(message:Response) {
    this.message = message.status + " " + message.statusText;
  }
}
