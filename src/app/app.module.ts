import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { UsersComponent } from "./users/users.component";
import { WellListComponent } from "./well/list-well/well-list.component";
import { AddWellComponent } from "./well/add-well/add-well.component";
import { DragDropParentComponent } from "./drag-drop/drag-drop-parent.component";
import { CompListComponent } from "./drag-drop/component-list/compo-list.component";
import { DropBlockComponent } from "./drag-drop/component-block/drop-comp.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  { path: "", redirectTo: "users", pathMatch: "full" },
  { path: "users", component: UsersComponent },
  { path: "wells", component: WellListComponent },
  { path: "drag-drop", component: DragDropParentComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    HelloComponent,
    AddWellComponent,
    WellListComponent,
    DragDropParentComponent,
    CompListComponent,
    DropBlockComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
