import { Component, OnInit } from '@angular/core';
import {UserprofileService} from 'app/userprofile/userprofile.service';

@Component({
  selector: 'app-profile',
  providers: [UserprofileService],
  templateUrl: '../templates/profile.component.html',
  styleUrls: ['../css/profile.component.css']
})

export class ProfileComponent implements OnInit{
    user;
    constructor(private _service: UserprofileService ) { }

    ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
  }

}