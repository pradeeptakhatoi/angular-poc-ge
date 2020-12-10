import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WellService } from "../../services/well.service";
import { Well } from "../../models/well";

@Component({
  selector: "app-add-well",
  templateUrl: "./add-well.component.html"
})
export class AddWellComponent implements OnInit {
  @Output() newWell: EventEmitter<Well> = new EventEmitter();
  public formSubmitted = false;
  public sourceInitialVal = 10003;

  constructor(private wellService: WellService, private fb: FormBuilder) {}
  public addWellForm: FormGroup;

  ngOnInit(): void {
    this.addWellForm = this.fb.group({
      name: ["", [Validators.required]],
      type: ["", [Validators.required]],
      source: [{ value: "", disabled: false }, [Validators.required]]
    });
    this.addWellForm.patchValue({
      source: this.sourceInitialVal
    });
  }

  get f() {
    return this.addWellForm.controls;
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
    this.sourceInitialVal++;
    this.addWellForm.patchValue({
      source: this.sourceInitialVal
    });
    Object.keys(this.addWellForm.controls).forEach(key => {
      this.addWellForm.get(key).markAsPristine;
    });
    this.formSubmitted = false;
  }
}
