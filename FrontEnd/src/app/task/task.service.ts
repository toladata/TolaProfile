import {Injectable} from '@angular/core';
import { Headers, RequestOptions,Response, Http} from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';

@Injectable()
export class TaskService{
    constructor(private http: Http) { }
    getTasks(){
        let headers = new Headers({
            'Accept':'application/json',
            'Content-Type':'application/json',

        });
        let options = new RequestOptions({
            headers: headers,
        });
        return this.http.get('http://127.0.0.1:8000/api/tasks/', options)
        .map(function(response){
            return response.json();
        });
    }

    createTask(taskData){

        let headers = new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
         });

         let options = new RequestOptions({
            headers: headers,
    });

        let postData = {
                            "task": taskData.task,
                            "priority": Number(taskData.priority),
                            "status": 1,
                            "submitter_email": taskData.submitter_email,
                            "created_by": Number(taskData.created_by),
                            "note": taskData.note
                        };
                        
   return this.http.post('http://127.0.0.1:8000/api/tasks/', JSON.stringify(postData), options) 
                         .map(res => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
                         .subscribe();
    }
}