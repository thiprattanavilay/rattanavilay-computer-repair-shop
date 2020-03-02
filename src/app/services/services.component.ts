import { Component, OnInit } from "@angular/core";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { InvoiceComponent } from "../invoices/invoices.component";
import { ServiceOrder } from "./ServiceOrder";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
  NgForm,
  FormArray,
  ValidatorFn
} from "@angular/forms";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  buildOrder = new ServiceOrder();

  constructor(public dialog: MatDialog) {}

  //start building the form
  serviceForm = new FormGroup({
    checkboxes: new FormGroup(
      {
        passwordReset: new FormControl(false),
        spywareRemoval: new FormControl(false),
        ramUpgrade: new FormControl(false),
        softwareInstallation: new FormControl(false),
        tuneUp: new FormControl(false),
        keyboardCleaning: new FormControl(false),
        cleanUp: new FormControl(false)
      },
      [Validators.required, this.requireCheckboxesToBeCheckedValidator()]
    ),
    laborHours: new FormControl("", [Validators.required]),
    parts: new FormControl("")
  });

  //custom validator
  requireCheckboxesToBeCheckedValidator(minRequired = 1): ValidatorFn {
    return function validate(formGroup: FormGroup) {
      let checked = 0;
      Object.keys(formGroup.controls).forEach(key => {
        const control = formGroup.controls[key];
        if (control.value === true) {
          checked++;
        }
      });

      if (checked < minRequired) {
        return {
          requireCheckboxesToBeChecked: true
        };
      }
      return null;
    };
  }

  onSubmit() {
    console.log(this.serviceForm.get("checkboxes").value);

    for (let service in this.serviceForm.get("checkboxes").value) {
      if (this.serviceForm.get("checkboxes").value[service]) {
        switch (service) {
          case "passwordReset":
            this.buildOrder.setPasswordResetFlag(true);
            this.buildOrder.setTotalCost(
              this.buildOrder.getPasswordResetInfo().price
            );
            break;
          case "spywareRemoval":
            this.buildOrder.setSpywareRemovalFlag(true);
            this.buildOrder.setTotalCost(
              this.buildOrder.getSpywareRemovalInfo().price
            );
            break;
          case "ramUpgrade":
            this.buildOrder.setRamUpgradeFlag(true);
            this.buildOrder.setTotalCost(
              this.buildOrder.getRamUpgradeInfo().price
            );
            break;
          case "softwareInstallation":
            this.buildOrder.setSoftwareInstallationFlag(true);
            this.buildOrder.setTotalCost(
              this.buildOrder.getSoftwareInstallationInfo().price
            );
            break;
          case "tuneUp":
            this.buildOrder.setTuneUpFlag(true);
            this.buildOrder.setTotalCost(this.buildOrder.getTuneUpInfo().price);
            break;
          case "keyboardCleaning":
            this.buildOrder.setKeyboardCleaningFlag(true);
            this.buildOrder.setTotalCost(
              this.buildOrder.getKeyboardCleaningInfo().price
            );
            break;
          case "cleanUp":
            this.buildOrder.setCleanUpFlag(true);
            this.buildOrder.setTotalCost(
              this.buildOrder.getCleanUpInfo().price
            );
            break;
          default:
            break;
        }
      }
    }

    if(this.serviceForm.get("laborHours").value != "" && this.serviceForm.get("laborHours").value != null){
      this.buildOrder.setLaborHoursRequested(Number(this.serviceForm.get("laborHours").value));
      let price = Number(this.serviceForm.get("laborHours").value * this.buildOrder.getLaborCostInfo().rate);
      this.buildOrder.setLaborCost(price);
      this.buildOrder.setTotalCost(this.buildOrder.getLaborCostInfo().price);
    }
    if(this.serviceForm.get("parts").value != "" && this.serviceForm.get("parts").value != null){
      this.buildOrder.setPartsInfo(this.serviceForm.get("parts").value);
    }

    this.openDialog();
  }

  openDialog() {
    const modalTest = this.dialog.open(InvoiceComponent, {
      width: "50%",
      height: "80%"
    });

    modalTest.componentInstance.invoicesOrder = this.buildOrder;
  }
}
