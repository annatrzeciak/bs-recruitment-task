import {
  ChangeDetectionStrategy,
  Component,
  Input
} from "@angular/core";
import { UsersService } from "../../services/users.service";
import { User } from "../../models/user";
import { PaginationInstance } from "ngx-pagination";
import { Router } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent {
   message: string = "";
   users: User[] = [];
   loading: boolean = true;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public config: PaginationInstance = {
    id: "advanced",
    itemsPerPage: 15,
    currentPage: 1
  };
  public labels: any = {
    previousLabel: "",
    nextLabel: ""
  };
  constructor(private usersService: UsersService, private router: Router) {
    this.users=new Array<User>();
    this.loading = true;
    this.getUsers();
  }
  onPageChange(number: number): void {
    this.loading = true;
    this.config.currentPage = number;
    this.loading = false;
  }
  getUsers(): void {
    this.loading = true;
    this.usersService
      .getUsers()
      .then(result => {
        this.users = result.Data;
        this.loading = false;
      })
      .catch(error => this.showMessage(error));
  }
  showMessage(message: Response): void {
    this.message = message.status + " " + message.statusText;
  }

  editUser(user: User): void {
    this.router.navigate(["/editUser", user.Id]);
  }
  deleteUser(user: User): void {
    this.router.navigate(["/deleteUser", user.Id]);
  }
}
