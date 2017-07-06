import {Injectable} from '@angular/core';
import { Headers, RequestOptions,Response, Http} from '@angular/http';
import { Observable } from "rxjs/Observable";
import {AuthHttp, JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';

const TOLAPOFILE_TASK_SERVER = 'http://127.0.0.1:8000/api/tasks/';


@Injectable()
export class TaskService{
    constructor(private http: Http, private _authHttp: AuthHttp) { }
    getTasks(){
        let headers = new Headers({
            'Accept':'application/json',
            'Content-Type':'application/json',

        });
        let options = new RequestOptions({
            headers: headers,
        });
        return this._authHttp.get(TOLAPOFILE_TASK_SERVER, options)
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

         return this._authHttp.post(TOLAPOFILE_TASK_SERVER, JSON.stringify(postData), options) 
            .map(res => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
            .subscribe();
    }

    taskDetails(task_id){
        let headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });

        let options = new RequestOptions({
            headers : headers,
        });

        return this._authHttp.get(TOLAPOFILE_TASK_SERVER+Number(task_id)+'/', options)
            .map(res=>res.json())
            .catch((error:any)=>Observable.throw(error.json().error || 'Server error'))
            .subscribe();
    }

    updateTask(task_id, editTaskData){

        let headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });

        let options = new RequestOptions({
            headers : headers,
        });

         let postEditData = {
                            "task": editTaskData.task,
                            "priority": Number(editTaskData.priority),
                            "status": 1,
                            "submitter_email": editTaskData.submitter_email,
                            "created_by": Number(editTaskData.created_by),
                            "note": editTaskData.note
                        };

        return this._authHttp.put(TOLAPOFILE_TASK_SERVER+Number(task_id)+'/', JSON.stringify(postEditData), options)
            .map(res=>res.json())
            .catch((error:any)=>Observable.throw(error.json().error || 'Server error'))
            .subscribe();
    }

    deleteTask(task_id){
        let headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });

        let options = new RequestOptions({
            headers: headers,
        });

        return this._authHttp.delete(TOLAPOFILE_TASK_SERVER+Number(task_id)+'/', options)
            .map(res=>res.json())
            .catch((error:any)=>Observable.throw(error.json().error || 'Server error'))
            .subscribe();
    }
}