import { Component, OnInit } from '@angular/core';
import {UserprofileService} from './userprofile.service';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { PasswordValidation } from 'app/shared/helpers/password.validation';

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
    private editPasswordForm: FormGroup;
    countries;
    organizations; 

    constructor(private _service: UserprofileService,private fb: FormBuilder ) {
       this.editUserForm = fb.group({
        username: [''],
        email: [''],
        firstname: [''],
        lastname: [''],
        organization: [''],
        country: [''],
       });
       this.editPasswordForm = fb.group({
         old_password:['', Validators.required],
         new_password:['', [Validators.required, Validators.minLength(6)]],
         confirm_new_password:['', [Validators.required, Validators.minLength(6)]],
         },
            
         );
    }

    ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
    this._service.getCountry().subscribe((response) => {
                this.countries = response;
          });
    this._service.getOrganization().subscribe((organization) => {
                this.organizations = organization;
          });      
    }

  editProfile(user_id,editUserForm){
    this._service.updateUser(user_id,editUserForm).subscribe((response) => {
    this.user = response;
    });

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

  //edit password
  editPassword(editPasswordForm){
    this._service.updatePassword(editPasswordForm).subscribe()

  }
}
