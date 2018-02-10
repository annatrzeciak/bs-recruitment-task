import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
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
    return this.http.get(this.url, opts).map(data => data.json());
    
  }
}
