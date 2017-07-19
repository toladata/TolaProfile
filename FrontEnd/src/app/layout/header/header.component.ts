import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'app/pages/userprofile/userprofile.service';

@Component({
  selector: 'tola-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _userService: UserprofileService) { }

  ngOnInit() {
  }

  logout(){
    this._userService.logout();
  }
}
