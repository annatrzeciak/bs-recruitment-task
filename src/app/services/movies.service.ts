import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Movie } from "../models/movie";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MoviesService {
  readonly url = "https://serverlesswiekonek.azurewebsites.net/api/annat/movies";
  constructor(private http: Http) {}
  private token = "example-token";

  getMovies(): Promise<Movie[]> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .get(this.url, opts)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  getMovie(id: string): Promise<Movie> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .get(this.url + "/" + id, opts)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  addMovie(data: Movie): Promise<Movie[]> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .post(this.url, data, opts)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  updateMovie(id: string, data: Movie): Promise<Movie[]> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .put(this.url + "/" + id, data, opts)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  deleteMovie(id: string): Promise<Movie[]> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .delete(this.url + "/" + id, opts)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response): any {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}
