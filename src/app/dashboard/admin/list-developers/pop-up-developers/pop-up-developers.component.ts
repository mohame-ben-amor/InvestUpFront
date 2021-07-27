import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { DeveloperService } from 'src/app/core/service/developers.service';

@Component({
  selector: 'app-pop-up-developers',
  templateUrl: './pop-up-developers.component.html',
  styleUrls: ['./pop-up-developers.component.scss']
})
export class PopUpDevelopersComponent implements OnInit {
  editForm: FormGroup;

  idDeveloper = "";
  displayDeletePopUp = "";
  displayEditPopUp = ""
  firstname = "";
  lastname = "";
  withHoldingStatusList = ["None", "In vacation", "Sick days", "Suspension"];
  roles = ["Project Manager", "Developer"];
  error: string;
  success: string;
  constructor(public dialogRef: MatDialogRef<PopUpDevelopersComponent>,
    private developerService: DeveloperService,
    private route: Router) { }

  ngOnInit(): void {
    this.idDeveloper = localStorage.getItem('idDeveloper');
    this.displayEditPopUp = localStorage.getItem('displayEditPopUp');
    this.displayDeletePopUp = localStorage.getItem('displayDeletePopUp');
    this.firstname = localStorage.getItem('firstname');
    this.lastname = localStorage.getItem('lastname');
    this.initForm()
  }


  private initForm() {

    this.editForm = new FormGroup({
      'withHoldingStatus': new FormControl("", Validators.required),
      'role': new FormControl("", Validators.required),
    });
  }

  onCancel() {
    console.log("clear button");
    this.editForm.reset();
    this.removeLocalStorage();
    this.dialogRef.close();
  }

  onSubmit() {
    let withHoldingStatus = "";
    let role = "";
    withHoldingStatus = this.editForm.value.withHoldingStatus;
    role = this.editForm.value.role;
    if (role == "Developer") {
      this.developerService.updateWithHoldingType(+this.idDeveloper, withHoldingStatus).subscribe(
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
      this.developerService.updateRole(+this.idDeveloper).subscribe((res) => {
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
        }
      );
    }
  }

  onDelete() {
    this.developerService.delete(+this.idDeveloper).subscribe(
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
        this.error = error;
        this.error = error["statusText"] == "Unknown Error" ? "Please check your networking" : error["error"]["message"];
        let currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate([currentUrl])
      }
    );
  }

  removeLocalStorage() {
    localStorage.removeItem('idDeveloper');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
  }
}
