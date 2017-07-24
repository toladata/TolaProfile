import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'app/pages/userprofile/userprofile.service';

@Component({
  selector: 'tola-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user;
  constructor(private _userService: UserprofileService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
  }

  logout(){
    this._userService.logout();
  }
}
