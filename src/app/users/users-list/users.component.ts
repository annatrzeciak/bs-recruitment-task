import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
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
export class UsersComponent implements OnInit {
  users: User[] = new Array();
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
    this.loading = true;
  }
  onPageChange(number: number) {
    this.loading = true;
    this.config.currentPage = number;
    this.loading = false;
  }

  ngOnInit() {
    this.getUsers();
  
  }

  getUsers() {
    this.loading = true;
    this.usersService.getUsers().subscribe(result => {
      this.users = result.Data;
      this.loading = false;
    });
  }

  editUser(user: User) {
      this.router.navigate(['/editUser', user.Id]);

  }
  deleteUser(user: User) {
    this.router.navigate(['/deleteUser', user.Id]);
  }
}
