import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

@Injectable()
export class UserprofileService {
    public token: string;
    isLogged: boolean;

    userChange: Subject<boolean> = new Subject<boolean>();

    constructor (private http: Http, private _router: Router){
        // set token if saved in local storage
        var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        this.token = loggedUser && loggedUser.token;
        this.isLogged = false;
    }

    login(email:string, password: string){
        let headers = new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
         });

         let options = new RequestOptions({
            headers: headers,
    });

    return this.http.post('http://127.0.0.1:8000/api/auth/login/',JSON.stringify({ email: email, password: password}), options)
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
        console.log(JSON.stringify(userData));

        let headers = new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
         });

         let options = new RequestOptions({
            headers: headers,
    });

    return this.http.post('http://127.0.0.1:8000/api/auth/register/',JSON.stringify(userData), options)
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
    updateUser(user_id,userData){

        let headers = new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
         });

         let options = new RequestOptions({
            headers: headers,
    });

    return this.http.post('http://127.0.0.1:8000/api/tolausers/'+user_id+'/',JSON.stringify(userData), options)
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

//login in wit facebook
login_with_facebook(response){
        let headers = new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
         });

         let options = new RequestOptions({
            headers: headers,
    });

    return this.http.post('http://127.0.0.1:8000/api/auth/facebook/',JSON.stringify({"access_token": response.authResponse.accessToken,
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
}

