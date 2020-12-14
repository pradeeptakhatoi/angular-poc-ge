import { Component, OnInit } from "@angular/core";
import { DragDropService } from "../../services/drag-drop.service";

@Component({
  selector: "app-comp-list",
  templateUrl: "./compo-list.component.html"
})
export class CompListComponent implements OnInit {
  public components: any[] = [];

  constructor(private dragDropService: DragDropService) {}

  ngOnInit(): void {
    this.dragDropService
      .getComponents()
      .toPromise()
      .then(res => {
        this.components = res;
      });
  }

  itemDragged(e: any, item: any) {
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = "move";
      this.dragDropService.setData({ source: item, sourceCtrl: this });
    }
    e.stopPropagation();
  }
}
