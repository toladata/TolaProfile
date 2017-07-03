import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

@Injectable()
export class UserprofileService {
    public token: string;

    constructor (private http: Http, private _router: Router){
        // set token if saved in local storage
        var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        this.token = loggedUser && loggedUser.token;
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
                    let token = response.json() && response.json().token;
                    if (token) {
                        // set token property
                        this.token = token;

                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('loggedUser', JSON.stringify({ email: email, token: token }));

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

    logout(){
        localStorage.removeItem("user");        
        this._router.navigate(['home']);
    }
}

