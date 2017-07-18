import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {TaskService} from './task.service';
import {SharedService} from 'app/shared/services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './templates/task.component.html',
  styleUrls: ['./css/task.component.css'],
  providers: [TaskService,FormBuilder, SharedService]
})
export class TaskComponent implements OnInit{
  tasks;
  tolausers;
  user = JSON.parse(localStorage.getItem('loggedUser'));
  p: number = 1;

  private editTaskForm: FormGroup;
  private createTaskForm: FormGroup;

  constructor(
    private _service: TaskService,
    private fb: FormBuilder,
    private _router: Router,
    private _sharedService: SharedService
    ){
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
      status: [''],

    })
   }

  ngOnInit() {

      this.getAllTasks();
      this._sharedService.getTolaUsers().subscribe(
        tolausers => this.tolausers=tolausers,
      );
  }

  //get all tasks
  getAllTasks(){
    this._service.getTasks().subscribe(
        tasks => this.tasks=tasks,
        );
  }

  //Create a task
  createTask(formData){
    this._service.createTask(formData).subscribe(task => this.tasks.push(task));
  }

  //Edit task
  editTask(task_id, editFormData){
    console.log(editFormData);
    this._service.updateTask(task_id, editFormData).subscribe(
      task =>this.tasks.unshift(task),
    );
    this.tasks = this.tasks.filter(x => x.id !== task_id);
  }

  //Delete Task
  deleteTask(task_id){
    let confirm_delete = confirm("Are you sure you want to delete task #"+task_id+ " ?");
    if(confirm_delete == true){
      this._service.deleteTask(task_id);
      this.tasks = this.tasks.filter(x => x.id !== task_id);
    }

  }

  //Fetch Specific Task Details
  getTaskDeatils(task_id){
    this._service.taskDetails(task_id).subscribe(function(response){
        return response;
      });

  }

  //A method to autofill the edit task form
  fillInEditTaskForm(task_id): void{
        let editedTask = this.tasks.filter(x => x.id === task_id)[0];
        this.editTaskForm.setValue({
          task: editedTask.task,
          note: editedTask.note,
          created_by: editedTask.created_by,
          due_date: editedTask.due_date,
          submitter_email: editedTask.submitter_email,
          assigned_to: editedTask.assigned_to,
          priority: editedTask.priority,
          status: editedTask.status
        });
  }

  //Filter tasks
  filterTask(option,value){
    if (option === "status"){
      this.tasks =  this.tasks.filter(x => x.status === Number(value));
    }

    if (option === "priority"){
      this.tasks =  this.tasks.filter(x => x.priority === Number(value));
    }

    if (option === "assigned"){
      this.tasks =  this.tasks.filter(x => x.assigned_to === Number(value));
    }

    if (option === "created"){
      console.log(value);
      this.tasks =  this.tasks.filter(x => x.created_by === Number(value));
    }

    if (option === "completed"){
      console.log(value);
      this.tasks =  this.tasks.filter(x => x.created_by === Number(value) && x.status === Number(value));
    }
  }
}
