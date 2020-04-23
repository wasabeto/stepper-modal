import { Component, OnInit } from "@angular/core";
import { StepModel } from "./step.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "stepper-modal";
  stepList: StepModel[];
  modalStatusClass: number;

  constructor() {
    this.modalStatusClass = 5;

    this.stepList = [
      { index: 1, title: "Draft", description: "Created on", date: new Date(2020, 0, 31), visited: true },
      { index: 2, title: "Pending Approval", description: "Approval sent", date: new Date(2020, 1, 14), visited: true },
      { index: 3, title: "Approved", description: "Abandoned on", date: new Date(2020, 1, 20), visited: false },
      { index: 4, title: "Execute", visited: false },
      { index: 5, title: "Concluded", visited: false },
      { index: 6, title: "Closed", visited: false },
      { index: 7, title: "Finish", visited: false },
    ];
  }

  toggleModal(status: number): void {
    this.modalStatusClass = status;
  }
}
