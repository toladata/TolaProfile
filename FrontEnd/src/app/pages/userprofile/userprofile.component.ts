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
    public isCollapsed:boolean = true;
  	private editUserForm: FormGroup;
    constructor(private _service: UserprofileService,private fb: FormBuilder ) {
       this.editUserForm = fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        //organization: ['', Validators.required],
        //country: ['', Validators.required],
       });
    }

    ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
  }

  editProfile(user_id,editUserForm){
    console.log(user_id,editUserForm);

  }

  //fill edit user form
  fillEditUser(user_id): void{
    let editedUser = JSON.parse(localStorage.getItem('loggedUser'));
    console.log(editedUser);
    this.editUserForm.setValue({
       username:editedUser.username,
       email:editedUser.email,
       firstname:editedUser.firstname,
       lastname:editedUser.lastname,
      //  organization:editedUser.organization,
       //country:editedUser.country,
          });
    this.isCollapsed = false;
  }

}
