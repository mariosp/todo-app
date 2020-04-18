import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { MatCardModule } from '@angular/material/card';
import { NewTaskComponent } from '../../components/new-task/new-task.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { MatDividerModule } from '@angular/material/divider';
import {TaskItemComponent} from '../../components/task-item/task-item.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

const Routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];



@NgModule({
  declarations: [
    MainComponent,
    NewTaskComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatCheckboxModule
  ]
})
export class MainModule { }
