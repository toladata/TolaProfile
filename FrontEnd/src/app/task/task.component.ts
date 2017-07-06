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
export class TaskComponent implements OnInit {
  tasks;
  private createTaskForm: FormGroup;
  private editTaskForm: FormGroup;

  constructor(private _service: TaskService,private fb: FormBuilder, private _router: Router) {
     this.createTaskForm = fb.group({
      task: ['', Validators.required ],
      note: ['' ],
      created_by: [''  ],
      created_date: [''],
      due_date: [''],
      submitter_email: ['', Validators.required],
      assigned_to: [''],
      priority: [''],
      status: ['']

    })
    this.editTaskForm = fb.group({
      task: ['', Validators.required ],
      note: ['' ],
      created_by: [''  ],
      created_date: [''],
      due_date: [''],
      submitter_email: ['', Validators.required],
      assigned_to: [''],
      priority: [''],
      status: ['']

    })
  
   }

  ngOnInit() {
      this._service.getTasks().subscribe(
        tasks => this.tasks=tasks
        );
  }

  createTask(formData){
    let task = this._service.createTask(formData)
    if (task){
      window.location.reload();
    }

  }
  editTask(formData){

  }
}
