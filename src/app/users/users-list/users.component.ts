import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { User } from "../../models/user";
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
    users: User[] = [];
    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        this.loadUsers();
    }
    loadUsers() {
        this.usersService.getUsers().subscribe(result => {
            this.users = result.Data;
          });
    }
}