import {Injectable} from '@angular/core';
import { Headers, RequestOptions,Response, Http} from '@angular/http';
import { Observable } from "rxjs/Observable";
import {AuthHttp, JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';

const TOLAPOFILE_USER_SERVER = 'http://127.0.0.1:8000/api/tolausers/';
const TOLA_ACTIVITY_SERVER = 'http://127.0.0.1:8000/api/initiations/';
const TOLA_WORK_SERVER = 'http://127.0.0.1:8000/api/tickets/';
const headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json',});
const  options = new RequestOptions({ headers : headers,});

@Injectable()
export class SharedService {

  constructor(private _authHttp: AuthHttp ) { }

  getTolaUsers(){
    return this._authHttp.get(TOLAPOFILE_USER_SERVER, options)
    .map(function(response){
      return response.json();
    });
  }

  get_unapproved_activities(){
  	return this._authHttp.get(TOLA_ACTIVITY_SERVER, options)
  	.map(function(response){
			return response.json();
  	});
  }

  get_my_tickets(){
  	return this._authHttp.get(TOLA_WORK_SERVER, options)
  	.map(function(response){
			return response.json();
  	});
  }

}
