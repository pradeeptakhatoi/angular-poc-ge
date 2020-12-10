import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  getUsers() {
    const USERS: User[] = [
      { name: "Mahesh", age: 25 },
      { name: "Shakti", age: 26 },
      { name: "Krishan", age: 27 },
      { name: "Radha", age: 28 }
    ];
    return of(USERS);
  }
}
