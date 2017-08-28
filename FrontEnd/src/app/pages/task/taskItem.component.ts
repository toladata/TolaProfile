import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {TaskService} from './task.service';
import {SharedService} from 'app/shared/services/shared.service';
import { Router } from "@angular/router";

@Component({
  selector: 'create-task',
  templateUrl: './templates/taskItem.component.html',
  styleUrls: ['./css/task.component.scss'],
  providers: [TaskService,FormBuilder,SharedService],
})
export class TaskItemComponent implements OnInit {
  tasks;
  tolausers;
  assigned_user;
  username;
  task_id;

  //alerts
  confirm_assign;
  confirm_edition;
  confirm_delete;
  user = JSON.parse(localStorage.getItem('loggedUser'));

  //Collapse
  public editCollapse:boolean = true;
  public assignCollapsed:boolean = true;
  
  //forms
  private assignTaskForm: FormGroup;
  private editTaskForm: FormGroup;

  constructor(private _service: TaskService,private fb: FormBuilder, private _sharedService : SharedService,
  private router: Router) { 
    this.assignTaskForm = fb.group({
        assigned_to: [''],
        });

     this.editTaskForm = fb.group({
      task: ['', Validators.required ],
      note: ['', Validators.required],
      created_by: [this.user.id],
      due_date: [''],
      submitter_email: [this.user.email],
      assigned_to: [''],
      priority: [''],
      status: [''],

    })
  }

  ngOnInit() {

    this._service.getTasks().subscribe((tasks) =>{
      this.tasks =tasks,
      this.tasks = tasks.filter(x => x.id=== 21);
      });

    this._sharedService.getTolaUsers().subscribe(
        tolausers => this.tolausers=tolausers,
      );
  }


  //Assign Task
  assignTask(task_id,assignTaskData){
      let assigned_user = this.tolausers.filter(x => x.id === Number(assignTaskData.assigned_to))[0];
      this.username = assigned_user.username;
     let confirm_assign = confirm("You are about to assign task #"+task_id+" to "+this.username+".");
      if(confirm_assign == true){
        console.log("nice choice");
      }
    this.confirm_assign = "You have successfully assigned task #"+task_id+" to "+this.username+".";
  }
  //fill assign task form
  fillInAssignTaskForm(task__id): void{
          let assignedTask = this.tasks.filter(x => x.id === task__id)[0];
          this.assignTaskForm.setValue({
            assigned_to: assignedTask.assigned_to,
          });
          this.task_id = task__id;
  }


  //Edit task
  editTask(task_id, editFormData){
    this._service.updateTask(task_id, editFormData).subscribe(
      task =>this.tasks.unshift(task),
    );
    this.tasks = this.tasks.filter(x => x.id !== task_id);
    this.confirm_edition = "You have successfully edited task #"+task_id+ ".";
  }

  //fill the edit task form
  fillInEditTaskForm(task__id): void{
        let editedTask = this.tasks.filter(x => x.id === task__id)[0];
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
        this.task_id = task__id
  }


  //Delete Task
  deleteTask(task_id){
    let confirm_delete = confirm("Are you sure you want to delete task #"+task_id+ " ?");
    if(confirm_delete == true){
      this._service.deleteTask(task_id);
      this.tasks = this.tasks.filter(x => x.id !== task_id);
      this.router.navigate(['task']);
      this.confirm_delete = "You have successfully deleted task #"+task_id+ ".";
    }
    
    


  }
}
