import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pole } from 'src/app/core/models/pole';
import { PoleManager } from 'src/app/core/models/poleManager';
import { UserStatus } from 'src/app/core/models/userStatus';

@Component({
  selector: 'app-add-pole',
  templateUrl: './add-pole.component.html',
  styleUrls: ['./add-pole.component.scss']
})
export class AddPoleComponent implements OnInit {

  form: FormGroup;
  poleManagers: PoleManager[] = [new PoleManager(1, "Rayen", "CEHRNI", "222222222", "roro@cherni", "abdlahmid", "dev dev", UserStatus.REMOTE),
  new PoleManager(2, "BEN amor", "Hama", "222222222", "rayen@cherni", "abdlahmid", "dev marketing", UserStatus.PRESENTIAL)];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.initForm();
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
    console.log(this.form.value);
    this.onClear();
  }
  onClear() {
    this.form.reset();
  }
}
