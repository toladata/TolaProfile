import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { UserprofileService } from '../userprofile.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  providers: [FormBuilder, UserprofileService],
  templateUrl: '../templates/login.component.html',
  styleUrls: ['../css/userprofile.component.scss']
})
export class LoginComponent implements OnInit {

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
