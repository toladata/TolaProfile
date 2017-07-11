import {Injectable} from '@angular/core';
import { Headers, RequestOptions,Response, Http} from '@angular/http';
import { Observable } from "rxjs/Observable";
import {AuthHttp, JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';

const TOLAPOFILE_USER_SERVER = 'http://127.0.0.1:8000/api/tolausers/';
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

}
