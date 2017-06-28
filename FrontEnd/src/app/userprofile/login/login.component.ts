import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { UserprofileService } from '../userprofile.service';



@Component({
  selector: 'app-login',
  providers: [FormBuilder, UserprofileService],
  templateUrl: '../templates/login.component.html',
  styleUrls: ['../css/login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _service: UserprofileService) { 

    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit() {
  }
  login(loginForm){

    this._service.login(loginForm.username, loginForm.password);
  }
}
