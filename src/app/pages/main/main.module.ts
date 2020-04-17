import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { MatCardModule } from '@angular/material/card';
import { NewTaskComponent } from '../../components/new-task/new-task.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {InputViewDirective} from '../../directives/input-view.directive';
import {MatButtonModule} from '@angular/material/button';

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
    InputViewDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MainModule { }
