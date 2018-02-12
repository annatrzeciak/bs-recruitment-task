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
  selector: "app-user-add",
  templateUrl: "./user-add.component.html",
  styleUrls: ["./user-add.component.scss"]
})
export class UserAddComponent implements OnInit {
  private user: User;
  private userAddForm: FormGroup;
  private formHasErrors: boolean = false;
  constructor(
    private usersService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = new User();
    this.userAddForm = this.buildUserAddForm();
  }

  buildUserAddForm() {
    return this.formBuilder.group({
      firstName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16)
      ]),
      lastName: new FormControl(""),
      username: new FormControl(""),
      email: new FormControl(""),
      birthday: new FormControl("")
    });
  }
  setUserValue() {
    console.log(this.userAddForm.value);
    this.user.FirstName = this.userAddForm.value.firstName;
    this.user.LastName = this.userAddForm.value.lastName;
    this.user.Username = this.userAddForm.value.username;
    this.user.Email = this.userAddForm.value.email;
    this.user.Birthday = new Date(this.userAddForm.value.birthday);
  }
  addUser() {
    if (this.userAddForm.invalid) {
      this.formHasErrors = true;
    } else {
      this.setUserValue();
      console.log(this.user);
      this.formHasErrors = false;
      this.usersService.addUser(this.user).subscribe(() => {
        this.router.navigate(["/users"]);
        this.userAddForm.reset();
      });
    }
  }
}
