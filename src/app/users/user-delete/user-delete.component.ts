import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { User } from "../../models/user";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../../services/users.service";
import { Response } from "@angular/http/src/static_response";

@Component({
  selector: "app-user-delete",
  templateUrl: "./user-delete.component.html",
  styleUrls: ["./user-delete.component.scss"]
})
export class UserDeleteComponent {
   message: string = "";
   user: User;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.loadUser();
  }
  loadUser(): void {
    this.user = this.route.snapshot.data["user"];
  }
  deleteUser(): void {
    this.usersService
      .deleteUser(this.user.Id)
      .then(result => this.router.navigate(["/users"]))
      .catch(error => this.showMessage(error));
  }
  showMessage(message: Response): void {
    this.message = message.status + " " + message.statusText;
  }
}
