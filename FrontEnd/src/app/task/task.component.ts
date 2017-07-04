import { Component, OnInit } from '@angular/core';
import {TaskService} from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './templates/task.component.html',
  styleUrls: ['./css/task.component.css'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {
  tasks;
  constructor(private _service: TaskService) { }

  ngOnInit() {
      this._service.task().subscribe(
        tasks => this.tasks=tasks
        );
  }

}
