import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';
import {ApiService} from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  inputValue = '';
  loading: boolean;
  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  handleInputChange(event){
    this.inputValue = event;
  }

  async onSubmit() {
    this.loading = true;
    const task: Task = {
      userId : 1,
      title: this.inputValue,
      completed: false
    };
    this.apiService.addNewUserTask(task).subscribe(res => {
      this.loading = false;
      this.inputValue = '';
    }, error => {
      this.loading = false;
      this.openSnackBar('Error while saving your task. Please try again');
    });
  }

  openSnackBar(msg: string): void {
    this.snackBar.open(msg, 'Dismiss', {duration: 5000});
  }

}
