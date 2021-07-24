import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoleManager } from 'src/app/core/models/poleManager';
import { UserStatus } from 'src/app/core/models/userStatus';
import { AdminService } from 'src/app/core/service/admin.service';
import { PoleManagerService } from 'src/app/core/service/pole-manager.service';

@Component({
  selector: 'app-add-pole',
  templateUrl: './add-pole.component.html',
  styleUrls: ['./add-pole.component.scss']
})
export class AddPoleComponent implements OnInit {

  form: FormGroup;
  poleManagers: PoleManager[] = [];

  constructor(private adminService: AdminService,
    private poleManagerService: PoleManagerService) { }
  error = "";
  success = "";

  ngOnInit(): void {
    this.initForm();
    this.getAllPoleManagers();
  }
  
  private initForm() {

    this.form = new FormGroup({
      'name': new FormControl("", [
        Validators.required,
        Validators.minLength(2)]),
      'description': new FormControl("", [
        Validators.required,
        Validators.minLength(10)]),
      'poleManager': new FormControl("", [Validators.required]),
      'capacity': new FormControl("", [Validators.required,
      Validators.pattern("^[0-9]*$")]),
      'reserved': new FormControl("", [Validators.required,
      Validators.pattern("^[0-9]*$")]),
    });
  }

  onSubmit() {

    if (this.form.invalid) {
      return;
    } else {
      this.error = "";
      this.success = "";
      this.adminService
        .createPole(
          this.form.value.name,
          this.form.value.description,
          this.form.value.capacity,
          this.form.value.reserved,
          this.form.value.poleManager
        )
        .subscribe(
          (res) => {
            let idPole = res["id"];
            let idPoleManager = this.form.value.poleManager;
            this.adminService.updatePoleManager(idPoleManager, idPole).subscribe(
            (response) => {
              console.log("ceci le pole name en princ : " + response);
            },
            (updateErrorMessage)=>{
                console.log("update error message "+updateErrorMessage["error"]["message"]);
              }
            );

            this.form.reset();
            return this.success = "Your request has been sent successfuly ";
          },
          (errorMessage) => {
            console.log("Details Error " + errorMessage["error"]["message"]);
            return this.error = errorMessage;
          }
        );
    }
  }

  onClear() {
    this.form.reset();
  }

  getAllPoleManagers() {
    this.poleManagerService.getAll().subscribe(
      poleManager => {
        this.poleManagers = poleManager;

      });
  }
}
