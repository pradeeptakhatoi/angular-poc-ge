import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Well } from "../models/well";

@Injectable({
  providedIn: "root"
})
export class WellService {
  getWells() {
    const WELLS: Well[] = [
      { name: "TestRLSWell2", type: "esp", source: 10002 },
      { name: "TestRLSWell1", type: "esp", source: 10001 }
    ];
    return of(WELLS);
  }
}
