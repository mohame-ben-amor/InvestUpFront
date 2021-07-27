import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { delay } from 'rxjs/operators';
import { PoleManagerService } from 'src/app/core/service/pole-manager.service';

@Component({
  selector: 'app-pop-up-pole-managers',
  templateUrl: './pop-up-pole-managers.component.html',
  styleUrls: ['./pop-up-pole-managers.component.scss']
})
export class PopUpPoleManagersComponent implements OnInit {

  editForm: FormGroup;
  idPoleManager = "";
  displayDeletePopUp = "";
  displayEditPopUp = ""
  firstname = "";
  lastname = "";
  withHoldingStatusList = ["None", "In vacation", "Sick days", "Suspension"];
  error: string;
  success: string;

  constructor(
    public dialogRef: MatDialogRef<PopUpPoleManagersComponent>,
    private poleManagerService: PoleManagerService,
    private route: Router) { }

  ngOnInit(): void {
    this.idPoleManager = localStorage.getItem('idPoleManager');
    this.displayEditPopUp = localStorage.getItem('displayEditPopUp');
    this.displayDeletePopUp = localStorage.getItem('displayDeletePopUp');
    this.firstname = localStorage.getItem('firstname');
    this.lastname = localStorage.getItem('lastname');
    this.error = "";
    this.success = "";
    this.initForm();
  }

  private initForm() {
    this.editForm = new FormGroup({
      'withHoldingStatus': new FormControl("", Validators.required),
    });
  }

  onCancel() {
    this.editForm.reset();
    this.removeLocalStorage();
    this.dialogRef.close();
  }

  onSubmit() {
    let withHoldingStatus = "";
    withHoldingStatus = this.editForm.value.withHoldingStatus;
    this.poleManagerService.editWithHoldingType(+this.idPoleManager, withHoldingStatus).subscribe(
      (res) => {
        if (res) {
          this.success = "Your request has been sent successfuly ";
          setTimeout(() => {
            this.editForm.reset();
            this.dialogRef.close();
          }, 300)
          this.removeLocalStorage();
          let currentUrl = this.route.url;
          this.route.routeReuseStrategy.shouldReuseRoute = () => false;
          this.route.onSameUrlNavigation = 'reload';
          this.route.navigate([currentUrl]);
        }
      },
      (error) => {
        this.error = "Please check your networking";
        let currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate([currentUrl]);
      }
    );
  }

  onDelete() {
    this.poleManagerService.delete(+this.idPoleManager).subscribe(
      (res) => {
        if (res) {
          this.success = "Your request has been sent successfuly ";
          setTimeout(() => {
            this.editForm.reset();
            this.dialogRef.close();
          }, 300)
          this.removeLocalStorage();
          let currentUrl = this.route.url;
          this.route.routeReuseStrategy.shouldReuseRoute = () => false;
          this.route.onSameUrlNavigation = 'reload';
          this.route.navigate([currentUrl])
        }
      },
      (error) => {
        this.error = error["statusText"]=="Unknown Error" ? "Please check your networking":error["error"]["message"];
        let currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate([currentUrl])
      }
    );
  }

  removeLocalStorage() {
    localStorage.removeItem('idPoleManager');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
  }

}
