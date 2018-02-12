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
    return this.http
      .get(this.url, opts)
      .map(data => data.json())
      .catch(this.handleError);
  }
  getMovie(id: string): Observable<Movie> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .get(this.url + "/" + id, opts)
      .map(data => data.json())
      .catch(this.handleError);
  }
  addMovie(data: Movie): Observable<Movie> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .post(this.url, data, opts)
      .map(data => data.json())
      .catch(this.handleError);
  }
  updateMovie(id: string, data): Observable<Movie> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .put(this.url + "/" + id, data, opts)
      .map(data => data.json())
      .catch(this.handleError);
  }
  deleteMovie(id: string): Observable<Movie> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .delete(this.url + "/" + id, opts)
      .map(data => data.json())
      .catch(this.handleError);
  }
  private handleError(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status ? `${error.status} - ${error.statusText}` : "Server error";
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
