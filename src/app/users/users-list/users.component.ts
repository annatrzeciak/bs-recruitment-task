import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import { UsersService } from "../../services/users.service";
import { User } from "../../models/user";
import { PaginationInstance } from "ngx-pagination";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]

})
export class UsersComponent implements OnInit {
  users: User[] = new Array();
  loading: boolean;
  public maxSize: number = 7;
  public directionLinks: boolean = true;

  public autoHide: boolean = false;
  public config: PaginationInstance = {
    id: "advanced",
    itemsPerPage: 5,
    currentPage: 1
  };
  public labels: any = {
    previousLabel: "",
    nextLabel: "",
  };
  constructor(private usersService: UsersService) {}
  onPageChange(number: number) {
    this.config.currentPage = number;
}
  

  ngOnInit() {
    this.loading = true;
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.usersService.getUsers().subscribe(result => {
      this.users = result.Data;
    });
    this.loading = false;
  }
}
