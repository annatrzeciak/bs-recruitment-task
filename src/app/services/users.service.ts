import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { User } from "../models/user";
import { PageResponse } from "../models/pageResponse";

@Injectable()
export class UsersService {
  readonly url = "https://serverlesswiekonek.azurewebsites.net/api/annat/users";
  constructor(private http: Http) {}
  token = "example-token";

  getUsers(): Observable<PageResponse<User>> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .get(this.url, opts)
      .map(data => data.json())
      .catch(this.handleError);
  }
  getUser(id: string): Observable<User> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .get(this.url + "/" + id, opts)
      .map(data => data.json())
      .catch(this.handleError);
  }
  addUser(data: User): Observable<User> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .post(this.url, data, opts)
      .map(data => data.json())
      // .catch(this.handleError);
  }
  updateUser(id: string, data): Observable<User> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http
      .put(this.url + "/" + id, data, opts)
      .map(data => data.json())
      .catch(this.handleError);
  }
  deleteUser(id: string): Observable<User> {
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
