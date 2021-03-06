import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {UserprofileService} from '../userprofile.service';
import {Router} from '@angular/router';
import { PasswordValidation } from 'app/shared/helpers/password.validation';

@Component({
  selector: 'app-register',
  providers: [FormBuilder, UserprofileService],
  templateUrl: '../templates/register.component.html',
  styleUrls: ['../css/userprofile.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;  

  constructor(private fb: FormBuilder, private _service: UserprofileService, private _router: Router) { 
    this.registerForm = fb.group({
      firstname: ['', Validators.required],
      lastname: [''  ],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],

    },
      {
        validator: PasswordValidation.MatchPassword // your validation method
      }
    )
  }

  ngOnInit() {
  }

  register(registerForm){
    this._service.register(registerForm)
      .subscribe(result => {
                if (result === true) {
                    let loggedUser = localStorage.getItem("loggedUser");
                    console.log(loggedUser);
                    this._router.navigate(['login']);
                } else {
                  console.log("There was a problem Posting Your Data");
                }
            });
  }
}
