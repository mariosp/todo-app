import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main.component';
import {MatCardModule} from '@angular/material/card';

const Routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    MatCardModule
  ]
})
export class MainModule { }
