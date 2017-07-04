import {Injectable} from '@angular/core';
import { Headers, RequestOptions,Response, Http} from '@angular/http';

@Injectable()
export class TaskService{
    constructor(private http: Http) { }
    task(){
        let headers = new Headers({
            'Accept':'application/json',
            'Content-Type':'application/json',

        });
        let options = new RequestOptions({
            headers: headers,
        });
        console.log("test task");
        // return this.http.get('http://127.0.0.1:8000/api/task/task_list/', options)
        // .map((response: Response) => {
        //     let data = response.json();
        // });
    }
    
}