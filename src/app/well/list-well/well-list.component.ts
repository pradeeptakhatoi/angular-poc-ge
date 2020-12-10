import { Component, OnInit } from "@angular/core";
import { WellService } from "../../services/well.service";
import { Well } from "../../models/well";

@Component({
  selector: "app-well-list",
  templateUrl: "./well-list.component.html"
})
export class WellListComponent implements OnInit {
  public wells: Well[];

  constructor(private wellService: WellService) {}

  ngOnInit(): void {
    this.wellService
      .getWells()
      .toPromise()
      .then((res: Well[]) => {
        this.wells = res;
      });
  }

  handleNewWell(well: Well) {
    this.wells = [well, ...this.wells];
  }
}
