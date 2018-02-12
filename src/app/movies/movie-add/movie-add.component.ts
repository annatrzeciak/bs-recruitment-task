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
  selector: "app-movie-add",
  templateUrl: "./movie-add.component.html",
  styleUrls: ["./movie-add.component.scss"]
})
export class MovieAddComponent {
  private message: string = "";
  private movie: Movie;
  private movieAddForm: FormGroup;
  private formHasErrors: boolean = false;
  constructor(
    private movieService: MoviesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    @Inject(FormBuilder) fb: FormBuilder
  ) {
    this.movie = new Movie();
    this.movieAddForm = fb.group({
      title: [
        "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(16)]
      ],
      year: "",
      director: "",
      rating: ""
    });
  }

  setMovieValue(): void {
    this.movie.Title = this.movieAddForm.value.title;
    this.movie.Year = this.movieAddForm.value.year;
    this.movie.Director = this.movieAddForm.value.director;
    this.movie.Rating = this.movieAddForm.value.rating;
  }
  addMovie(): void {
    if (this.movieAddForm.invalid) {
      this.formHasErrors = true;
    } else {
      this.setMovieValue();
      this.formHasErrors = false;
      this.movieService
        .addMovie(this.movie)
        .then(result => this.router.navigate(["/movies"]))
        .catch(error => this.showMessage(error));
    }
  }
  showMessage(message: Response): void {
    this.message = message.status + " " + message.statusText;
  }
}
