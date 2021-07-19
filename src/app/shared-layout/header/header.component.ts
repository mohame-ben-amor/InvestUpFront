
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.initForm();
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  private initForm() {
    this.editForm = new FormGroup({
      'password': new FormControl("", Validators.required),
      'npassword': new FormControl("", Validators.required),
    });
  }

  //Edit form methods 
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.onSubmit();
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit() {
    console.log(this.editForm.value)
    this.editForm.reset();
  }
}
