import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contact-pop-up',
  templateUrl: './contact-pop-up.component.html',
  styleUrls: ['./contact-pop-up.component.scss']
})
export class ContactPopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContactPopUpComponent>) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close();
  }
}
