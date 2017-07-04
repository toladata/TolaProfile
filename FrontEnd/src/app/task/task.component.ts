import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {TaskService} from './task.service';
import {TaskModule} from './task.module';

@Component({
  selector: 'app-task',
  templateUrl: './templates/task.component.html',
  styleUrls: ['./css/task.component.css'],
  providers: [TaskService,TaskModule,FormBuilder]
})
export class TaskComponent implements OnInit {
  tasks;
  private createTaskForm: FormGroup;
  constructor(private _service: TaskService,private fb: FormBuilder) {
     this.createTaskForm = fb.group({
      task: ['', Validators.required ],
      note: ['' ],
      created_by: [''  ],
      created_date: [''],
      due_date: [''],
      submitter_email: ['', Validators.required],
      assigned_to: [''],
      priority: ['']

    })
  
   }

  ngOnInit() {
      this._service.getTasks().subscribe(
        tasks => this.tasks=tasks
        );
  }

  createTask(formData){
    this._service.createTask(formData);

  }

}
