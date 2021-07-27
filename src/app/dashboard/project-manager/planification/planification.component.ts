import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Developer } from 'src/app/core/models/developer';
import { UserStatus } from 'src/app/core/models/userStatus';

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.scss']
})
export class PlanificationComponent implements OnInit {

  form: FormGroup;
  decision = ["Presential", "Remote"];
  developers: Developer[] = [];


  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }
  private initForm() {

    this.form = new FormGroup({
      'developer': new FormControl("", [
        Validators.required]),
      'startingdate': new FormControl("", Validators.required),
      'deadline': new FormControl("", Validators.required),
      'decision': new FormControl("", [Validators.required]),

    });
  }

  onSubmit() {
    // b role bch naaml el redirection l aneho API bch nestaamlo besh n'ajouti el user khater 
    // kol create user API wahdo selon e role!
    console.log(this.form.value);
    this.onClear();
  }
  onClear() {
    this.form.reset();
  }

}
