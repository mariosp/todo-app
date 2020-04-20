import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Task} from '../../models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @ViewChild('inputEl') element;
  @Input()task: Task;
  inputValue = '';
  loading: boolean;
  inputClassName: string;
  inputLineThroughClassName: string;
  deleteClassName: string;
  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.inputValue = this.task.title;
    this.inputLineThroughClassName = this.task.completed ? 'line' : '';
  }

  handleDelete(): void {
    this.apiService.deleteTask(this.task.id).subscribe(res => {
      this.apiService.removeTask(this.task.id);
    }, error => {
      this.openSnackBar('Error saving your data');
    });
  }

  handleCheckBox(): void {
    this.task.completed = !this.task.completed;
    this.inputLineThroughClassName = this.task.completed ? 'line' : '';

    this.apiService.updateTask(this.task.id, {completed: this.task.completed}).subscribe(res => {
      this.apiService.editTask(res);
    }, error => {
      this.task.completed = !this.task.completed;
      this.inputLineThroughClassName = this.task.completed ? 'line' : '';
      this.openSnackBar('Error saving your data');
    });
  }

  handleInputChange(event: Event): void {
    this.inputValue = event.target['value'];
  }

  handleSubmitChange(): void {
    const { title } = this.task;
    const inputValue = this.inputValue;
    if (inputValue === '' ) {
      this.inputValue = title;
    } else if (inputValue !== title) {
      this.apiService.updateTask(this.task.id, { title: inputValue } ).subscribe(res => {
        this.apiService.editTask(res);
      }, error => {
        this.openSnackBar('Error saving your data');
        this.task.title = title;
        this.inputValue = title;
      });
      this.task.title = inputValue;
    }
  }

  handleEnterUp() {
    this.element.nativeElement.blur();
  }

  handleFocus(focus: string): void {
    switch (focus) {
      case 'focus':
        this.inputClassName = 'focused';
        this.inputLineThroughClassName = '';
        break;
      case 'blur':
        this.inputClassName = '';
        this.inputLineThroughClassName = this.task.completed ? 'line' : '';
        this.handleSubmitChange();
        break;
      default:
    }
  }

  handleMouseEvents(mouse: string) {
    switch (mouse) {
      case 'enter':
        this.deleteClassName = 'enter';
        break;
      case 'out':
        this.deleteClassName = '';
        break;
      default:
    }
  }

  openSnackBar(msg: string): void {
    this.snackBar.open(msg, 'Dismiss', {duration: 5000});
  }
}
