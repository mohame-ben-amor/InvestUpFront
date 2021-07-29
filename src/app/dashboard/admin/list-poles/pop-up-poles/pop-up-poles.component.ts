import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { PoleManager } from 'src/app/core/models/poleManager';
import { PoleManagerService } from 'src/app/core/service/pole-manager.service';
import { PoleService } from 'src/app/core/service/pole.service';

@Component({
  selector: 'app-pop-up-poles',
  templateUrl: './pop-up-poles.component.html',
  styleUrls: ['./pop-up-poles.component.scss']
})
export class PopUpPolesComponent implements OnInit {

  editForm: FormGroup;
  idPole = "";
  idOldPoleManager = "";
  displayDeletePopUp = "";
  displayEditPopUp = ""
  poleName = "";
  poleManagers: PoleManager[] = [];
  success = "";
  error = "";

  constructor(public dialogRef: MatDialogRef<PopUpPolesComponent>,
    private poleManagerService: PoleManagerService,
    private poleService: PoleService,
    private route: Router) { }

  ngOnInit(): void {
    this.idPole = localStorage.getItem('idPole');
    this.idOldPoleManager = localStorage.getItem("idOldPoleManager");
    this.displayEditPopUp = localStorage.getItem('displayEditPopUp');
    this.displayDeletePopUp = localStorage.getItem('displayDeletePopUp');
    this.poleName = localStorage.getItem('poleName');
    this.getAllPoleManagers();
    this.initForm();
  }

  private initForm() {
    this.editForm = new FormGroup({
      'poleManager': new FormControl("", Validators.required),
    });
  }

  onCancel() {
    this.editForm.reset();
    this.removeLocalStorage();
    this.dialogRef.close();
  }

  onSubmit() {
    console.log("id old Pole manager : " + this.idOldPoleManager);
    let poleManager = this.editForm.value.poleManager;
    console.log("id New Pole manager : " + poleManager);
    console.log("id pole : " + this.idPole);
    this.poleService.updatePoleManager(+this.idPole, poleManager).subscribe(
      (result) => {

        this.poleManagerService.deletePole(+this.idOldPoleManager).subscribe(
          (res) => {
            console.log("delete de pole d'un pole manager ! ");
          },
          (error) => {
            console.log(error);
          }
        );
        this.poleManagerService.updatePole(poleManager, +this.idPole).subscribe(
          (resultat) => {
            console.log("Done de la part de pole manager ! + resultat" + resultat);

          },
          (error) => {
            console.log("error de la part de poleService update pole manager : " + error);
            console.log(error["error"]);
            console.log(error["error"]["message"])
            error = "Please check your networking";
          }

        );
        console.log(result);
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
        console.log("error de la part de pole Service update pole manager : " + error["error"]["message"]);
        this.error = error["statusText"] == "Unknown Error" ? "Please check your networking" : error["error"]["message"];
        let currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate([currentUrl]);
      }
    )
  }

  onDelete() {
    //API delete here !!
    this.poleService.delete(+this.idPole).subscribe(
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

  getAllPoleManagers() {
    this.poleManagerService.getAll().subscribe(
      poleManagers => {
        this.poleManagers = poleManagers;
      });
  }

  removeLocalStorage() {
    localStorage.removeItem('idPole');
    localStorage.removeItem('displayEditPopUp');
    localStorage.removeItem('displayDeletePopUp');
    localStorage.removeItem('poleName');
  }
}
