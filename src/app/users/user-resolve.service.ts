import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Injectable()
export class UserResolve implements Resolve<User> {
    constructor(private usersService: UsersService) {
    }
    resolve(route: ActivatedRouteSnapshot) {
        return this.usersService.getUser(route.params['id']);
    }
}