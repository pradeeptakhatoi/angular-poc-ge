import { Component, OnInit } from "@angular/core";
import { DragDropService } from "../../services/drag-drop.service";

@Component({
  selector: "app-drop-block",
  templateUrl: "./drop-comp.component.html"
})
export class DropBlockComponent implements OnInit {
  public component: any;

  constructor(private dragDropService: DragDropService) {}

  ngOnInit(): void {
    // Code
  }

  ctrlDragOver(e: any) {
    e.preventDefault();
    let dragDropData = this.dragDropService.getData();
    this.component = dragDropData.source;
    console.log(this.component);
    // this.dragDropService.setData({
    //   action: "move",
    //   source: dragDropData.source,
    //   sourceCtrl: dragDropData.sourceCtrl,
    //   target: null,
    //   targetCtrl: this,
    //   dropPos: -1
    // });
    e.stopPropagation();
  }
}
