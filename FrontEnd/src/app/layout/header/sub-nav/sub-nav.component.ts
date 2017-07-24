import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'app/pages/userprofile/userprofile.service';
@Component({
  selector: 'tola-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {

  user;
  constructor(private _userService: UserprofileService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
  }

}
