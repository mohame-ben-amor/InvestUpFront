import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ProjectManagerService } from 'src/app/core/service/project-manager.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  editForm: FormGroup;
  idProjectManager = "";
  displayDeletePopUp = "";
  displayEditPopUp = ""
  firstname = "";
  lastname = "";
  withHoldingStatusList = ["None", "In vacation", "Sick days", "Suspension"];
  roles = ["Project Manager", "Pole Manager"];
  error = "";
  success = "";


  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    private projectManagerService: ProjectManagerService,
    private route: Router) { }

  ngOnInit(): void {
    this.idProjectManager = localStorage.getItem('idProjectManager');
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
      'role': new FormControl("", Validators.required),
    });
  }

  onCancel() {
    this.editForm.reset();
    this.removeLocalStorage();
    this.dialogRef.close();
  }

  onSubmit() {
    let withHoldingStatus = "";
    let role = "";

    withHoldingStatus = this.editForm.value.withHoldingStatus;
    role = this.editForm.value.role;
    if (role == "Project Manager") {
      this.projectManagerService.editWithHoldingType(+this.idProjectManager, withHoldingStatus).subscribe(
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
    } else {
      this.projectManagerService.updateRole(+this.idProjectManager).subscribe((res) => {
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
      },
        (error) => {
          this.error = "Please check your networking";
          let currentUrl = this.route.url;
          this.route.routeReuseStrategy.shouldReuseRoute = () => false;
          this.route.onSameUrlNavigation = 'reload';
          this.route.navigate([currentUrl]);
        });
    }
  }

  onDelete() {
    this.projectManagerService.delete(+this.idProjectManager).subscribe(
      (res) => {
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
    localStorage.removeItem('idProjectManager');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
  }



}
