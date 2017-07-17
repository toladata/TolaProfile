import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {TaskService} from './task.service';

@Component({
  selector: 'edit-task',
  templateUrl: './templates/editTask.component.html',
  styleUrls: ['./css/task.component.css'],
  providers: [TaskService,FormBuilder],
  
})
export class EditTaskComponent implements OnInit {
    user = JSON.parse(localStorage.getItem('loggedUser'));
    private editTaskForm: FormGroup;

    constructor(private _service: TaskService,private fb: FormBuilder,) {
   
    this.editTaskForm = fb.group({
      task: ['', Validators.required ],
      note: ['' ],
      created_by: [this.user.id],
      due_date: [''],
      submitter_email: [this.user.email],
      assigned_to: [''],
      priority: [''],
      status: ['']

    })
  
   }
    ngOnInit() {
    }
}