import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { User } from "../../models/user";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-user-delete",
  templateUrl: "./user-delete.component.html",
  styleUrls: ["./user-delete.component.scss"]
})
export class UserDeleteComponent implements OnInit {
  user: User;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.loadUser();
  }
  loadUser() {
    this.user = this.route.snapshot.data["user"];
  }
  deleteUser() {
    this.usersService.deleteUser(this.user.Id).subscribe(() => {
      this.router.navigate(["/users"]);
    });
  }
}
