import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ChildComponent } from "./child/child.component";
import { UsersComponent } from "./users/users.component";
import { WellListComponent } from "./well/list-well/well-list.component";
import { AddWellComponent } from "./well/add-well/add-well.component";

const routes: Routes = [
  { path: "", redirectTo: "users", pathMatch: "full" },
  { path: "users", component: UsersComponent },
  { path: "wells", component: WellListComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    HelloComponent,
    ChildComponent,
    AddWellComponent,
    WellListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
