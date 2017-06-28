import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class UserprofileService {

    constructor (private _router: Router){}

    login(username, password){
        console.log(username+'  ' + password);
    
        return false;
    }

    register(userData){
        console.log(userData);

    }

    logout(){
        localStorage.removeItem("user");        
        this._router.navigate(['home']);
    }
}

