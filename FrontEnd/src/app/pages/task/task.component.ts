import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {TaskService} from './task.service';
import {SharedService} from 'app/shared/services/shared.service';
import { UserprofileService } from '../userprofile/userprofile.service';
import {Router} from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-task',
  templateUrl: './templates/task.component.html',
  styleUrls: ['./css/task.component.scss'],
  providers: [TaskService,FormBuilder, SharedService]
})
export class TaskComponent implements OnInit{
  tasks;
  tolausers;
  user = JSON.parse(localStorage.getItem('loggedUser'));
  p: number = 1;
  task_id;
  tasks_completed;
  tasks_assigned;
  tasks_created;
  user_activities_awaiting_approval;
  user_tickets;
  filter_property;
  filter_value;
  username;

  //modal
  @ViewChild('editTaskModal') public editTaskModal:ModalDirective;
  @ViewChild('createTaskModal') public createTaskModal:ModalDirective;
  @ViewChild('assignTaskModal') public assignTaskModal:ModalDirective;

  public isCreateModalShown:boolean = false;
  public isEditModalShown:boolean = false;
  public isAssignModalShown:boolean = false;

  public showEditModal():void {
    this.isEditModalShown = true;
  }

  public hideModal():void {
    this.editTaskModal.hide();
  }
  public hideCreateModal():void {
    this.createTaskModal.hide();
  }

  public onCreateHidden():void {
    this.isCreateModalShown = false;
  }
  public onEditHidden():void {
    this.isEditModalShown = false;
  }
  //assign modal
  public showAssignModal():void {
    this.isAssignModalShown = true;
  }
  public hideAssignModal():void {
    this.assignTaskModal.hide();
  }
  public onAssignHidden():void {
    this.isAssignModalShown = false;
  }

  //collapse
  public isCollapsed:boolean = true;

   public collapsed(event:any):void {
    this.isCollapsed = false;
  }

  public expanded(event:any):void {
    this.isCollapsed = true;
  }

  private editTaskForm: FormGroup;
  private createTaskForm: FormGroup;
  private assignTaskForm: FormGroup;

  constructor(
    private _service: TaskService,
    private _userprofileService: UserprofileService,
    private fb: FormBuilder,
    private _router: Router,
    private _sharedService: SharedService
    ){
    this.createTaskForm = fb.group({
      task: ['', Validators.required ],
      note: ['', Validators.required],
      created_by: [this.user.id],
      due_date: [''],
      submitter_email: [this.user.email],
      assigned_to: [''],
      priority: [''],

    })

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

    this.assignTaskForm = fb.group({
        assigned_to: [''],
        })
   }

  ngOnInit() {

      this.getAllTasks();
      this._sharedService.getTolaUsers().subscribe(
        tolausers => this.tolausers=tolausers,
      );
  }

  //get all tasks
  getAllTasks(): void{
    this._service.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.tasks_completed = tasks.filter(x => x.created_by === Number(this.user.id) && x.status === 3);
      this.tasks_created = tasks.filter(x => x.created_by === Number(this.user.id));
      this.tasks_assigned = tasks.filter(x => x.assigned_to === Number(this.user.id));
    }
    );
  }

  //Create a task
  createTask(formData){
    this._service.createTask(formData).subscribe(task => this.tasks.push(task));
    this.hideCreateModal();
  }

  //Edit task
  editTask(task_id, editFormData){
    this._service.updateTask(task_id, editFormData).subscribe(
      task =>this.tasks.unshift(task),
    );
    this.tasks = this.tasks.filter(x => x.id !== task_id);
    this.hideModal();
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
        this.showEditModal();
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
  
  }

//get user tickets
get_user_tickets(){
  this._userprofileService.get_user_tickets().subscribe((response) => {
    this.user_tickets = response;
  });
}

//get user activities awaiting approval
get_activities_awaiting_approval(){
  this._userprofileService.get_activities_awaiting_approval().subscribe((response) => {
    this.user_tickets = response;
  });
}
//Assign Task
assignTask(task_id,assignTaskData){
    let assigned_user = this.tolausers.filter(x => x.id === Number(assignTaskData.assigned_to))[0];
    this.username = assigned_user.username;
   let confirm_assign = confirm("You are about to assign task #"+task_id+" to "+this.username+".");
    if(confirm_assign == true){
      console.log("nice choice");
    }
  this.hideAssignModal()
}
//fill assign task form
fillInAssignTaskForm(task__id): void{
        let assignedTask = this.tasks.filter(x => x.id === task__id)[0];
        this.assignTaskForm.setValue({
          assigned_to: assignedTask.assigned_to,
        });
        this.task_id = task__id;
        this.showAssignModal();
  }

filter_user_tasks(property: string, value: Number){
    this.filter_property = property;
    this.filter_value = value;
  }

}
