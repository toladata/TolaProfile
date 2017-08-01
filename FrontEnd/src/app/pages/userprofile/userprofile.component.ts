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
    countries;
    constructor(private _service: UserprofileService,private fb: FormBuilder ) {
       this.editUserForm = fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        organization: ['', Validators.required],
        country: ['', Validators.required],
       });
    }

    ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
    this._service.getCountry().subscribe((countries) =>{this.countries = countries;});
    console.log(this.countries);
  }

  editProfile(user_id,editUserForm){
    this._service.updateUser(user_id,editUserForm).subscribe();

  }

  //fill edit user form
  fillEditUser(user_id): void{
    let editedUser = JSON.parse(localStorage.getItem('loggedUser'));
    this.editUserForm.setValue({
       username:editedUser.username,
       email:editedUser.email,
       firstname:editedUser.firstname,
       lastname:editedUser.lastname,
      organization:editedUser.organization,
       country:editedUser.country,
          });
    this.isCollapsed = false;
  }

}
