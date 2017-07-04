import { Component, OnInit } from '@angular/core';
import {UserprofileService} from 'app/userprofile/userprofile.service';

@Component({
  selector: 'app-header',
  providers: [UserprofileService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user;
  constructor(private _service: UserprofileService ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
    console.log(this.user.user.username);
  }

  logout(){
    this._service.logout();

  }
}
