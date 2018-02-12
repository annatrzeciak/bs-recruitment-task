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
  selector: "app-movie-edit",
  templateUrl: "./movie-edit.component.html",
  styleUrls: ["./movie-edit.component.scss"]
})
export class MovieEditComponent implements OnInit {
  private movie: Movie;
  private movieEditForm: FormGroup;
  private formHasErrors: boolean = false;
  constructor(
    private movieService: MoviesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movie = new Movie();
    this.loadMovie();
    this.movieEditForm = this.buildMovieEditForm();
  }
  loadMovie() {
    this.movie = this.route.snapshot.data["movie"];
  }
  buildMovieEditForm() {
    return this.formBuilder.group({
      title: new FormControl(this.movie.Title, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16)
      ]),
      year: new FormControl(this.movie.Year),
      director: new FormControl(this.movie.Director),
      rating: new FormControl(this.movie.Rating)
    });
  }
  setMovieValue() {
    this.movie.Title = this.movieEditForm.value.title;
    this.movie.Year = this.movieEditForm.value.year;
    this.movie.Director = this.movieEditForm.value.director;
    this.movie.Rating = this.movieEditForm.value.rating;
  }
  updateMovie() {
    if (this.movieEditForm.invalid) {
      this.formHasErrors = true;
    } else {
      this.setMovieValue();

      this.formHasErrors = false;
      this.movieService.updateMovie(this.movie.Id, this.movie).subscribe(() => {
        this.router.navigate(["/movies"]);
        this.movieEditForm.reset();
      });
    }
  }
}
