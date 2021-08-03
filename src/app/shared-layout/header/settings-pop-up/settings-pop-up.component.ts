import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/service/admin.service';

@Component({
  selector: 'app-settings-pop-up',
  templateUrl: './settings-pop-up.component.html',
  styleUrls: ['./settings-pop-up.component.scss']
})
export class SettingsPopUpComponent implements OnInit {

  editForm: FormGroup;
  token = "";
  role = "";
  error: string;
  success: string;

  constructor(public dialogRef: MatDialogRef<SettingsPopUpComponent>,
    private route: Router,
    private adminService: AdminService) { }

  ngOnInit(): void {
    this.getCredentials();
    this.error = "";
    this.success = "";
    this.initForm();
  }

  private initForm() {
    this.editForm = new FormGroup({
      'oldPassword': new FormControl("", Validators.required),
      'newPassword': new FormControl("", Validators.required),
      'cPassword': new FormControl("", Validators.required),
    });
  }

  onCancel() {
    this.editForm.reset();
    this.dialogRef.close();
  }

  onSubmit() {
    let oldPassword = "";
    let newPassword = "";
    oldPassword = this.editForm.value.oldPassword;
    newPassword = this.editForm.value.newPassword;
    
  }

  getCredentials() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser["accessToken"];
    this.role = currentUser["user"]["role"]["roleName"];
  }

  reloadPage() {
    let currentUrl = this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([currentUrl])
  }

}
