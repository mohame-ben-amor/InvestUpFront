
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';
import { SettingsPopUpComponent } from './settings-pop-up/settings-pop-up.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

const document: any = window.document;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  editForm: FormGroup;
  closeResult: string;
  firstname = "";
  lastname = "";

  constructor(private dialog: MatDialog,private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getCredentials();
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  getCredentials() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.firstname = currentUser["user"]["firstname"];
    this.lastname = currentUser["user"]["lastname"];
  }

  logout() {
    this.authService.logout().subscribe((res) => {
      if (!res.success) {
        this.router.navigate(['/authentication/sign-in']);
      }
    });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(SettingsPopUpComponent, dialogConfig);
  }
}
