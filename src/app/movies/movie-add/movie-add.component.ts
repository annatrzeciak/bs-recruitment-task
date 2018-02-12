import { Movie } from "../../models/movie";
import { OnInit, Component } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { MoviesService } from "../../services/movies.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-add",
  templateUrl: "./movie-add.component.html",
  styleUrls: ["./movie-add.component.scss"]
})
export class MovieAddComponent implements OnInit {
  private movie: Movie;
  private movieAddForm: FormGroup;
  private formHasErrors: boolean = false;
  constructor(
    private movieService: MoviesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movie = new Movie();
    this.movieAddForm = this.buildMovieAddForm();
  }

  buildMovieAddForm() {
    return this.formBuilder.group({
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16)
      ]),
      year: new FormControl(""),
      director: new FormControl(""),
      rating: new FormControl("")
    });
  }
  setMovieValue() {
    this.movie.Title = this.movieAddForm.value.title;
    this.movie.Year = this.movieAddForm.value.year;
    this.movie.Director = this.movieAddForm.value.director;
    this.movie.Rating = this.movieAddForm.value.rating;
  }
  addMovie() {
    if (this.movieAddForm.invalid) {
      this.formHasErrors = true;
    } else {
      this.setMovieValue();

      this.formHasErrors = false;
      this.movieService.addMovie(this.movie).subscribe(() => {
        this.router.navigate(["/movies"]);
        this.movieAddForm.reset();
      });
    }
  }
}
