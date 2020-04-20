import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';
import {ApiService} from '../../services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  loading: boolean;
  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getUserTasks();
  }

  getUserTasks(): void {
    this.apiService.getUserTasks().subscribe(res => {
      this.loading = false;
      this.apiService.setTasks(res);
    }, error => {
      this.loading = false;
      this.openSnackBar('Error fetching your tasks');
    });

    this.apiService.userTasks$.subscribe((tasks: Task[])  => {
        this.tasks = tasks;
    });
  }

  openSnackBar(msg: string): void {
    this.snackBar.open(msg, 'Dismiss', {duration: 5000});
  }

}
