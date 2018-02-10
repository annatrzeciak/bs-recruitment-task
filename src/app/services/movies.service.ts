import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Movie } from "../models/movie";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { PageResponse } from "../models/pageResponse";
import { User } from "../models/user";

@Injectable()
export class MoviesService {
  readonly url = "https://serverlesswiekonek.azurewebsites.net/api/annat/movies";
  constructor(private http: Http) {}
  token = "example-token";

  getMovies(): Observable<Movie[]> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http.get(this.url, opts).map(data => data.json());
  }
}
