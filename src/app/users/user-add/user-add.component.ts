import { Component, Inject } from "@angular/core";
import { User } from "../../models/user";
import { UsersService } from "../../services/users.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Response } from "@angular/http/src/static_response";

@Component({
  selector: "app-user-add",
  templateUrl: "./user-add.component.html",
  styleUrls: ["./user-add.component.scss"]
})
export class UserAddComponent {
   message: string = "";
   user: User;
  userAddForm: FormGroup;
   formHasErrors: boolean = false;
  constructor(
    private usersService: UsersService,
    private router: Router,
   
    private route: ActivatedRoute,
    @Inject(FormBuilder) fb: FormBuilder
  ) {
    this.user = new User();
    this.userAddForm = fb.group({
      firstName: [
        "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(16)]
      ],
      lastName: "",
      username: "",
      email: "",
      birthday: ""
    });
  }
  setUserValue(): void {
    this.user.FirstName = this.userAddForm.value.firstName;
    this.user.LastName = this.userAddForm.value.lastName;
    this.user.Username = this.userAddForm.value.username;
    this.user.Email = this.userAddForm.value.email;
    this.user.Birthday = new Date(this.userAddForm.value.birthday);
  }
  addUser(): void {
    this.message = "";
    if (this.userAddForm.invalid) {
      this.formHasErrors = true;
    } else {
      this.setUserValue();
      this.formHasErrors = false;
      this.usersService
        .addUser(this.user)
        .then(result => this.router.navigate(["/users"]))
        .catch(error => this.showMessage(error));
    }
  }
  showMessage(message: Response): void {
    this.message = message.status + " " + message.statusText;
  }
}
