import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { AuthHttp, JwtHelper } from "angular2-jwt/angular2-jwt";

const TOLAPOFILE_USER_SERVER = 'http://127.0.0.1:8000/api/';
const headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json', });
const options = new RequestOptions({ headers: headers, });

@Injectable()
export class UserprofileService {
    public token: string;
    isLogged: boolean;

    userChange: Subject<boolean> = new Subject<boolean>();

    constructor (private http: Http, private _router: Router,private _authHttp: AuthHttp){
        // set token if saved in local storage
        var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

        this.token = loggedUser && loggedUser.token;
        this.isLogged = false;

        if(typeof loggedUser == "object"){
          this.isLogged = true;
        }
    }

    login(email:string, password: string){

         return this.http.post(TOLAPOFILE_USER_SERVER+'auth/login/', JSON.stringify({ email: email, password: password }), options)
        .map((response: Response) => {
                    // login successful if there's a jwt token in the response
                    let data = response.json();
                    let token = response.json().token
                    if (token) {
                        // set token property
                        this.token = data.token;

                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('id_token', token);
                        localStorage.setItem('loggedUser', JSON.stringify(data.user));
                        this.isLogged = true;
                        this.userChange.next(this.isLogged);

                        // return true for successful login
                        return true;
                    } else {
                        // return false for failed login
                        console.log("there was an error");
                        return false;
                    }
            });
    }

    register(userData){
       
        return this.http.post(TOLAPOFILE_USER_SERVER+'auth/register/', JSON.stringify(userData), options)
        .map((response: Response) => {

                    let data = response.json();
                    if (data) {
                        return true;
                    } else {
                        console.log("there was an error");
                        return false;
                    }
            });

    }

    //update user
    updateUser(user_id, userData){

    return this._authHttp.put('http://127.0.0.1:8000/api/tolausers/'+user_id+'/',JSON.stringify(userData), options)
        .map((response: Response) => {

                    let data = response.json();
                    if (data) {
                        return true;
                    } else {
                        console.log("there was an error");
                        return false;
                    }
            });

    }

//update user password
updatePassword(passData) {

    return this.http.put(TOLAPOFILE_USER_SERVER + '/auth/update-password/', JSON.stringify(passData), options)
        .map((response: Response) => {

            let data = response.json();
            if (data) {
                return true;
            } else {
                console.log("there was an error");
                return false;
            }
        });

}

//login in with facebook
login_with_facebook(response){

    return this.http.post(TOLAPOFILE_USER_SERVER+'/auth/facebook/', JSON.stringify({
        "access_token": response.authResponse.accessToken,
        "backend": "facebook" }), options)
        .map((response: Response) => {
                    // login successful if there's a jwt token in the response
                    let data = response.json();
                    let token = response.json().token
                    if (token) {
                        // set token property
                        this.token = data.token;

                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('id_token', token);
                        localStorage.setItem('loggedUser', JSON.stringify(data.user));

                        // return true for successful login
                        return true;
                    } else {
                        // return false for failed login
                        console.log("there was an error");
                        return false;
                    }
            });
    }

    logout(){
        localStorage.removeItem("id_token");
        localStorage.removeItem("loggedUser");
        this.isLogged = false;
        this.userChange.next(this.isLogged);
        this._router.navigate(['home']);
    }
    //get countries
    getCountry(){
        let headers = new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
         });

         let options = new RequestOptions({
            headers: headers,
    });
        return this._authHttp.get('http://127.0.0.1:8000/api/countries/', options)
        .map(function(response){
            console.log(response);
            return response.json();
        });
    }

}

