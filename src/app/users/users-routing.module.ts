import { Route, RouterModule } from "@angular/router";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserResolve } from "./user-resolve.service";
import { NgModule } from "@angular/core";
import { UserDeleteComponent } from "./user-delete/user-delete.component";

const USERS_ROOTS: Route[] = [
    { path: 'editUser/:id', component: UserEditComponent, resolve: { user: UserResolve } },
    { path: 'deleteUser/:id', component: UserDeleteComponent, resolve: { user: UserResolve } }
];

@NgModule({
    imports: [RouterModule.forChild(USERS_ROOTS)],
    exports: [RouterModule]
})
export class UserRoutingModule { }