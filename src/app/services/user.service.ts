import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  getUsers() {
    const USERS = [
      { name: "Mahesh", age: 25 },
      { name: "Shakti", age: 25 },
      { name: "Krishan", age: 25 },
      { name: "Radha", age: 25 }
    ];
    return of(USERS);
  }
}
