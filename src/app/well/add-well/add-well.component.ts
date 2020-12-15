import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WellService } from "../../services/well.service";
import { Well } from "../../models/well";

@Component({
  selector: "app-add-well",
  templateUrl: "./add-well.component.html"
})
export class AddWellComponent implements OnInit {
  @Output() newWell: EventEmitter<Well> = new EventEmitter();
  @Output() cancelEvt: EventEmitter<boolean> = new EventEmitter();
  @Input() source: number;

  public formSubmitted = false;
  public addWellForm: FormGroup;

  constructor(private wellService: WellService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addWellForm = this.fb.group({
      name: ["", [Validators.required]],
      type: ["", [Validators.required]],
      source: [this.source, [Validators.required]]
    });
  }

  get f() {
    return this.addWellForm.controls;
  }

  cancel() {
    this.cancelEvt.emit(true);
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.addWellForm.valid) {
      const well = this.addWellForm.value;
      this.newWell.emit(well);
      this.resetForm();
    }
  }

  resetForm() {
    this.addWellForm.reset();
    Object.keys(this.addWellForm.controls).forEach(key => {
      this.addWellForm.get(key).markAsPristine;
    });
    this.formSubmitted = false;
  }
}
