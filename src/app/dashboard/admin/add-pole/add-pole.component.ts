import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pole } from 'src/app/core/models/pole';
import { PoleManager } from 'src/app/core/models/poleManager';

@Component({
  selector: 'app-add-pole',
  templateUrl: './add-pole.component.html',
  styleUrls: ['./add-pole.component.scss']
})
export class AddPoleComponent implements OnInit {

  form: FormGroup;
  poleManagers: PoleManager[] = [
    new PoleManager(1, "RAYEN", "CHERNI"),new PoleManager(2, "MOHAMMED", "BEN AMOR")
  ]

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    let pole = new Pole();

    this.form = new FormGroup({
      'name': new FormControl(pole.name, [
        Validators.required,
        Validators.minLength(2)]),
      'description': new FormControl(pole.Description, [
        Validators.required,
        Validators.minLength(10)]),
      'poleManager': new FormControl(pole.PoleManagerName, [Validators.required]),
      'capacity': new FormControl(pole.capacity, [Validators.required,
      Validators.pattern("^[0-9]*$")]),
      'reserved': new FormControl(pole.reserved, [Validators.required,
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
