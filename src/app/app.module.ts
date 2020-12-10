import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ChildComponent } from "./child/child.component";
import { UsersComponent } from "./users/users.component";
import { Route } from "@angular/compiler/src/core";

const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: "", component: UsersComponent },
  { path: "", component: UsersComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, UsersComponent, HelloComponent, ChildComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
