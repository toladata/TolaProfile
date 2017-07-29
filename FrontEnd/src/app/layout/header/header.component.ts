import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserprofileService } from 'app/pages/userprofile/userprofile.service';

@Component({
  selector: 'tola-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{

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
  }

  logout(){
    this._userService.logout();
  }

  ngOnDestroy() {
   //prevent memory leak when this component destroyed
    this._sub.unsubscribe();
  }
}
