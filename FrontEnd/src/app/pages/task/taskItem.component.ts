import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {TaskService} from './task.service';

@Component({
  selector: 'create-task',
  templateUrl: './templates/taskItem.component.html',
  styleUrls: ['./css/task.component.scss'],
  providers: [TaskService,FormBuilder],
})
export class TaskItemComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('loggedUser'));
  tasks;
  //private createTaskForm: FormGroup;

  constructor(private _service: TaskService,private fb: FormBuilder,) { 
    
  }

  ngOnInit() {

    this._service.getTasks().subscribe((tasks) =>{
      this.tasks =tasks,
      this.tasks = tasks.filter(x => x.id=== 21);
      });
  }

}
