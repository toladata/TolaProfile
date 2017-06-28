import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {UserprofileService} from '../userprofile.service';

@Component({
  selector: 'app-register',
  providers: [FormBuilder, UserprofileService],
  templateUrl: '../templates/register.component.html',
  styleUrls: ['../css/register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;  

  constructor(private fb: FormBuilder, private _service: UserprofileService) { 
    this.registerForm = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]

    })
  }

  ngOnInit() {
  }

  register(registerForm){
    this._service.register(registerForm);
  }
}
