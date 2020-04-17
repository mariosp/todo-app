import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private tasks: Task[];
  private userTasks = new Subject();
  public userTasks$ = this.userTasks.asObservable();

  constructor(private http: HttpClient) { }

  getUserTasks(): Observable<any> {
    return this.http.get(`${environment.serverUrl}/todos`,  {params: {userId: '1'}});
  }

  addNewUserTask(data) {
    return this.http.post(`${environment.serverUrl}/todos`, data);
  }

  updateTask(id: number, data) {
    return this.http.patch(`${environment.serverUrl}/todos/${id}`, data);
  }

  deleteTask(id: number) {
    return this.http.delete(`${environment.serverUrl}/todos/${id}`);
  }

  setTasks(data) {
    this.tasks = data;
    this.userTasks.next(this.tasks);
  }

  addTask(data) {
    this.tasks = this.tasks.concat(data);
    this.userTasks.next(this.tasks);
  }

  editTask(data) {
   this.tasks = this.tasks.map((task) => {
     if (task.id !== data.id) {
       return task;
     }
     return {
       ...task,
       ...data
     };
   });
   this.userTasks.next(this.tasks);
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.userTasks.next(this.tasks);
  }


}
