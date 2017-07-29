import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'app/pages/userprofile/userprofile.service';
@Component({
  selector: 'tola-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {

  user;
  isLogged;
  _sub;
  constructor(private _userService: UserprofileService) {
      this.isLogged = _userService.isLogged;
      this. _sub = _userService.userChange.subscribe((value) => {
      this.isLogged = value;
    });
  }

  ngOnInit() {
    console.log(this.isLogged);
  }

  ngOnDestroy() {
   //prevent memory leak when component destroyed
    this._sub.unsubscribe();
  }
}
