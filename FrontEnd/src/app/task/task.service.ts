import {Injectable} from '@angular/core';
import { Headers, RequestOptions,Response, Http} from '@angular/http';

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
        console.log(JSON.stringify(taskData));

        let headers = new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
         });

         let options = new RequestOptions({
            headers: headers,
    });
    
    return this.http.post('http://127.0.0.1:8000/api/tasks/',JSON.stringify(taskData), options)
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
}