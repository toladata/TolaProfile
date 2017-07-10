import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {TaskService} from './task.service';
import {TaskModule} from './task.module';
import {Router} from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './templates/task.component.html',
  styleUrls: ['./css/task.component.css'],
  providers: [TaskService,TaskModule,FormBuilder]
})
export class TaskComponent implements OnInit{
  tasks;
  user = JSON.parse(localStorage.getItem('loggedUser'));
  private editTaskForm: FormGroup;
  private createTaskForm: FormGroup;
 

  constructor(private _service: TaskService,private fb: FormBuilder, private _router: Router) {
     this.createTaskForm = fb.group({
      task: ['', Validators.required ],
      note: ['' ],
      created_by: [this.user.id],
      due_date: [''],
      submitter_email: [this.user.email],
      assigned_to: [''],
      priority: [''],

    })
   
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
      this._service.getTasks().subscribe(
        tasks => this.tasks=tasks,
        );
  }

  createTask(formData){
    this._service.createTask(formData).subscribe(task => this.tasks.push(task));
  }

  editTask(task_id, editFormData){
    let task = this._service.updateTask(task_id, editFormData);
    if (task){
      window.location.reload();
    }
  }
  deleteTask(task_id){
    this._service.deleteTask(task_id);
    window.location.reload();

  }
}
