import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppService {
  getUserEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  getUser(){
      var user = JSON.parse(localStorage.getItem('loggedUser'));
      return this.getUserEvent.emit(user);
    }

}
