import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";
import { UsersService } from "../../services/users.service";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"]
})
export class UserEditComponent implements OnInit {
  private user: User;
  private userEditForm: FormGroup;
  private formHasErrors = false;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user=new User();
    this.loadUser();
    this.userEditForm = this.buildUserEditForm();
  }
  loadUser() {
    this.user = this.route.snapshot.data["user"];
  }
  buildUserEditForm() {
    return this.formBuilder.group({
      firstName: new FormControl(this.user.FirstName, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16)
      ]),
      lastName: new FormControl(this.user.LastName),
      username: new FormControl(this.user.Username),
      email: new FormControl(this.user.Email),
      birthday: new FormControl(this.user.Birthday)
    });
  }
  setUserValue() {
    console.log(this.userEditForm.value);
    this.user.FirstName = this.userEditForm.value.firstName;
    this.user.LastName = this.userEditForm.value.lastName;
    this.user.Username = this.userEditForm.value.username;
    this.user.Email = this.userEditForm.value.email;
    this.user.Birthday = new Date(this.userEditForm.value.birthday);
  }
  updateUser() {
    if (this.userEditForm.invalid) {
      this.formHasErrors = true;
    } else {
     
      this.setUserValue();
      this.usersService
        .updateUser(this.user.Id, this.user)
        .subscribe(error => {
          console.log(error);
          this.router.navigate(["/users"]);
          this.userEditForm.reset();
        });
    }
  }
}
