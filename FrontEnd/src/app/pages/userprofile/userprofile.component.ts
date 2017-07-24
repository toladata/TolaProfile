import { Component, OnInit } from '@angular/core';
import {UserprofileService} from './userprofile.service';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './templates/userprofile.component.html',
  styleUrls: ['./css/userprofile.component.scss'],
  providers: [UserprofileService, FormBuilder],
})
export class UserprofileComponent implements OnInit {

  	user;
  	private editForm: FormGroup;
    constructor(private _service: UserprofileService,private fb: FormBuilder ) {
       this.editForm = fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
       });
    }

    ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
  }

  editProfile(editForm){
    console.log(editForm);

  }


}
