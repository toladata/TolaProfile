import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserprofileService } from './pages/userprofile/userprofile.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./app.component.scss']
})
export class LandingpageComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _service: UserprofileService, private router: Router) {

    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit() {
  }
  login(loginForm){
    this._service.login(loginForm.email, loginForm.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['task']);
                } else {
                  console.log("There was a problem");
                }
            });
  }

}
