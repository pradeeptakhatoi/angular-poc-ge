import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html"
})
export class UsersComponent implements OnInit {
  public users: any[];
  public toggleLegend = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .toPromise()
      .then(res => {
        this.users = res;
      });
  }

  toggle() {
    this.toggleLegend = !this.toggleLegend;
  }
}
