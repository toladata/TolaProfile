import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {UserprofileService} from '../userprofile.service';
import {Router} from '@angular/router';

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
      firstname: ['' ],
      lastname: [''  ],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],

    })
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
