import { Component, Inject } from "@angular/core";
import { User } from "../../models/user";
import { UsersService } from "../../services/users.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Response } from "@angular/http/src/static_response";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"]
})
export class UserEditComponent {
  private message: string = "";
  private user: User;
  private userEditForm: FormGroup;
  private formHasErrors = false;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    @Inject(FormBuilder) fb: FormBuilder
  ) {
    this.user = new User();
    this.loadUser();
    this.userEditForm = fb.group({
      firstName: [
        this.user.FirstName,
        [Validators.required, Validators.minLength(3), Validators.maxLength(16)]
      ],
      lastName: this.user.LastName,
      username: this.user.Username,
      email: this.user.Email,
      birthday: this.user.Birthday
    });
  }

  loadUser(): void {
    this.user = this.route.snapshot.data["user"];
  }

  setUserValue(): void {
    this.user.FirstName = this.userEditForm.value.firstName;
    this.user.LastName = this.userEditForm.value.lastName;
    this.user.Username = this.userEditForm.value.username;
    this.user.Email = this.userEditForm.value.email;
    this.user.Birthday = new Date(this.userEditForm.value.birthday);
  }
  updateUser(): void {
    if (this.userEditForm.invalid) {
      this.formHasErrors = true;
    } else {
      this.setUserValue();
      this.usersService
        .updateUser(this.user.Id, this.user)
        .then(result => this.router.navigate(["/users"]))
        .catch(error => this.showMessage(error));
    }
  }
  showMessage(message: Response): void {
    this.message = message.status + " " + message.statusText;
  }
}
