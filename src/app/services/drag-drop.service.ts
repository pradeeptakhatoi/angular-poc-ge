import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DragDropService {
  private data: any;

  getComponents() {
    const COMPONENTS: any[] = [
      { name: "text", label: "TextBox" },
      { name: "button", label: "Button" },
      { name: "time", label: "Time" },
      { name: "date", label: "Date" }
    ];
    return of(COMPONENTS);
  }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
