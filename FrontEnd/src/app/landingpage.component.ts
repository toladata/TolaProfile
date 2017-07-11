import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserprofileService } from './userprofile/userprofile.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing',
  providers: [FormBuilder, UserprofileService],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./app.component.css']
})
export class LandingpageComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _service: UserprofileService, private router: Router) { 

    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }
  login(loginForm){
    this._service.login(loginForm.email, loginForm.password)
            .subscribe(result => {
                if (result === true) {
                    console.log(localStorage.getItem('id_token'));
                    
                    this.router.navigate(['task']);
                } else {
                  console.log("There was a problem");
                }
            });
  }

}
