import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {TaskService} from './task.service';

@Component({
  selector: 'create-task',
  templateUrl: './templates/createTask.component.html',
  styleUrls: ['./css/task.component.css'],
  providers: [TaskService,FormBuilder],
})
export class CreateTaskComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('loggedUser'));
  private createTaskForm: FormGroup;

  constructor(private _service: TaskService,private fb: FormBuilder,) { 
    this.createTaskForm = fb.group({
      task: ['', Validators.required ],
      note: ['' ],
      created_by: [this.user.id],
      due_date: [''],
      submitter_email: [this.user.email],
      assigned_to: [''],
      priority: [''],

    })
  }

  ngOnInit() {
  }

  createTask(formData){
    let task = this._service.createTask(formData);
    if (task){
      window.location.reload();
    }

  }
}
